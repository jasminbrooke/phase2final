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
  const [currentIndex, setCurrentIndex] = useState(4)
  const [customerArray, setCustomerArray] = useState([])
  // const [inventory, setInventory] = useState([{id: 0, count: 5}])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100&inc=name,dob,picture")
    .then(r => r.json())
    .then(data => {
      setCustomers(data.results)
      setCustomerArray(data.results.slice(0, 5))
    })
  }, [])

  const handleCustomer = (servedCustomer) => {
    let queue = customerArray.filter(customer => customer !== servedCustomer)
    queue.push(customers[currentIndex + 1])
    setCustomerArray(queue)
    setCurrentIndex(currentIndex + 1)
  }

  const handleSale = (requestedPotion, customerID) => {
    const stock = potions.find(ptn => ptn.id === requestedPotion.id).inventory
    if (stock >= 1) {
      const updatedPotions = potions.map(potion => potion.id === requestedPotion.id ? {...potion, inventory: potion.inventory - 1} : potion)
      setPotions(updatedPotions)
      setBudget(budget + requestedPotion.price)
      handleCustomer(customerID)
    } else {
      alert("Sold out!")
    }
  }

  const discontinuePotion = (potion) => {
    fetch(`http://localhost:3001/potions/${potion.id}`, {
    method: "DELETE",
    headers: {'Content-type': 'application/json'}
    })
    .then(() => setPotions(potions.filter(p => p.id !== potion.id)))
  }

  const handleBrew = (requestedPotion) => {
    const updatedPotions = potions.map(potion => potion.id === requestedPotion.id ? {...potion, inventory: potion.inventory + 1} : potion)
    setPotions(updatedPotions)
    setBudget(budget - requestedPotion.cost)
  }

  const handleForm = (newPotion) => {
    fetch("http://localhost:3001/potions", {
      method: 'POST',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify(newPotion)
    })
    .then(() => getPotions())
  }

  const getPotions = () => {
    fetch("http://localhost:3001/potions")
    .then(r => r.json())
    .then(data => setPotions(data)) 
  }

  useEffect(() => {
    getPotions()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <NavBar />
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
                potions={potions}
                budget={budget}
                customerArray={customerArray}
              />
            }
          />
          <Route exact path="/" element={ <Intro />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
