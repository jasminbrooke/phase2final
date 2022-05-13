import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Shopfront from "./Shopfront";
import Intro from "./Intro";

function App() {
  const [potions, setPotions] = useState([])
  const [budget, setBudget] = useState(100)
  const [customers, setCustomers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(5)
  const [customerArray, setCustomerArray] = useState([])
  const [count, setCount] = useState(0)

  const handleCount = () => setCount(count + 1)

  const handleCustomer = () => {
    if (customers[currentIndex + 4]) {
      setCustomerArray(customers.slice(currentIndex, currentIndex + 5))
      setCurrentIndex(currentIndex + 5)
    } else {
      alert("!!! No more customers! Final Score:" + `${budget}` + "!!!")
    }
  }

  const handleSale = (requestedPotion) => {
    const stock = potions.find(ptn => ptn.id === requestedPotion.id)?.inventory
    if (stock >= 1) {
      const updatedPotions = potions.map(potion => potion.id === requestedPotion.id ? { ...potion, inventory: potion.inventory - 1 } : potion)
      setPotions(updatedPotions)
      setBudget(budget + requestedPotion.price)
    }
    else {
      console.log('sold out')
      alert("Sold out!")
    }
  }




  const discontinuePotion = (potion) => {
    fetch(`https://phase2-db.herokuapp.com/potions/${potion.id}`, {
      method: "DELETE",
      headers: { 'Content-type': 'application/json' }
    })
      .then(() => setPotions(potions.filter(p => p.id !== potion.id)))
  }

  const handleBrew = (requestedPotion) => {   
    setBudget(budget - requestedPotion.cost)
    fetch(`https://phase2-db.herokuapp.com/potions/${requestedPotion.id}`, {
      method: "PATCH",  
      headers: {    
        "Content-type": "application/json"  
      },  
      body: JSON.stringify({
        inventory: requestedPotion.inventory + 1
      }),
    }) 
    .then(() => {
        const updatedPotions = potions.map(potion => potion.id === requestedPotion.id ? { ...potion, inventory: potion.inventory + 1 } : potion)
        setPotions(updatedPotions)
    })
  }

  const handleForm = (newPotion) => {
    fetch("https://phase2-db.herokuapp.com/potions", {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(newPotion)
    })
      .then(() => getPotions())
  }

  const getPotions = () => {
    fetch("https://phase2-db.herokuapp.com/potions")
      .then(r => r.json())
      .then(data => setPotions(data))
  }

  const getCustomers = () => {
    fetch("https://randomuser.me/api/?results=20&inc=name,dob,picture")
      .then(r => r.json())
      .then(data => {
        setCustomers(data.results)
        setCustomerArray(data.results.slice(0, 5))
      })
  }

  useEffect(() => {
    getPotions()
    getCustomers()
  }, [])

  useEffect(() => {
    if (count > 0 && count % 5 === 0) {
      setTimeout(() => { handleCustomer()}, 500)
    }
  }, [count])

  return (
    <div>
      <BrowserRouter>
        <NavBar budget={budget} />
        <Switch>
          <Route exact path="/menu"
            element={
              <Menu
                potions={potions}
                handleForm={handleForm}
                getPotions={getPotions}
                discontinuePotion={discontinuePotion}
              />
            }
          />
          <Route exact path="/shopfront"
            element={
              <Shopfront
                handleSale={handleSale}
                handleBrew={handleBrew}
                discontinuePotion={discontinuePotion}
                handleCount={handleCount}
                potions={potions}
                budget={budget}
                customerArray={customerArray}
              />
            }
          />
          <Route exact path="/" element={<Intro budget={budget} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
