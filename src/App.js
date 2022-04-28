import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Menu from "./Menu";
import NavBar from "./NavBar";
import Shopfront from "./Shopfront";
import Intro from "./Intro";
import Store from "./Store";

function App() {
  const [potions, setPotions] = useState([])
  const [budget, setBudget] = useState(100)


  const handleSale = (requestedPotion) => {
    const updatedPotions = potions.map(potion => potion.id === requestedPotion.id ? {...potion, inventory: potion.inventory - 1} : potion)
    setPotions(updatedPotions)
    setBudget(budget + requestedPotion.price)
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
              />
            }
          />
          <Route exact path="/store" 
            element={
              <Store 
                budget={budget}
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
