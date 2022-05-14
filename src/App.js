import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Shopfront from "./Shopfront";
import Intro from "./Intro";
import AlertModal from "./AlertModal"

function App() {
  const [potions, setPotions] = useState([])
  const [budget, setBudget] = useState(100)
  const [customers, setCustomers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(5)
  const [customerArray, setCustomerArray] = useState([])
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)
  const [modalText, setModalText] = useState('')

  const resetDB = () => {
    potions.forEach(ptn => {
      if (ptn.id !== 0) {
        fetch(`https://phase2-db.herokuapp.com/potions/${ptn.id}`, {
          method: "DELETE",
          headers: { 'Content-type': 'application/json' }
        })
      }
    })
    fetch("https://phase2-db.herokuapp.com/potions/0", {  
      method: "PATCH",  
      headers: { "Content-type": "application/json" },  
      body: JSON.stringify({   
        inventory: 4 
      })
    })
    .then(() => getPotions())
  }

  const handleCount = () => setCount(count + 1)

  const handleModal = (text) => {
    setModalText(text)
    setOpen(true)
  }

  const handleCustomer = () => {
    if (customers[currentIndex + 4]) {
      setCustomerArray(customers.slice(currentIndex, currentIndex + 5))
      setCurrentIndex(currentIndex + 5)
    } else {
      handleModal(`!!! No more customers! Final Score: ${budget}!!!`)
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
      handleModal("Sold Out!")
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

  const getPotions = async () => {
    const response = await fetch("https://phase2-db.herokuapp.com/potions")
    const potionData = await response.json()
    setPotions(potionData)
  }

  const getCustomers = async () => {
    const response = await fetch("https://randomuser.me/api/?results=20&inc=name,dob,picture")
    const customerData = await response.json()
    setCustomers(customerData.results)
    setCustomerArray(customerData.results.slice(0, 5))
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
                handleModal={handleModal}
                potions={potions}
                budget={budget}
                customerArray={customerArray}
              />
            }
          />
          <Route exact path="/" element={<Intro resetDB={resetDB} budget={budget} setBudget={setBudget} />} />
        </Switch>
      </BrowserRouter>
      <AlertModal open={open} setOpen={setOpen} text={modalText}/>
    </div>
  );
}

export default App;
