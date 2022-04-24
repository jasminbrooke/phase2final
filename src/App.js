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

  const handleSale = (requestedPotion) => {
    const updatedPotions = potions.map(potion => potion.id === requestedPotion.id ? {...potion, inventory: potion.inventory - 1} : potion)
    setPotions(updatedPotions)
    // .then(() => setBudget(budget + potions.cost))
  }

  const handleBrew = (requestedPotion) => {
    const updatedPotions = potions.map(potion => potion.id === requestedPotion.id ? {...potion, inventory: potion.inventory + 1} : potion)
    setPotions(updatedPotions)
  }

  const handleForm = (newPotion) => {
    fetch("http://localhost:3001/potions", {
      method: 'POST',
      headers: {'content-Type': 'application/json'},
      body: JSON.stringify(newPotion)
    })
    .then(() => setPotions([...potions, newPotion]))
  }

  useEffect(() => {
    fetch("http://localhost:3001/potions")
    .then(r => r.json())
    .then(data => setPotions(data)) 
  }, [])

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/menu" element={<Menu handleForm={handleForm}/>} />   
          <Route exact path="/shopfront"
            element={
              <Shopfront 
                handleSale={handleSale}
                handleBrew={handleBrew}
                potions={potions}
              />
            }
          />
          <Route exact path="/store" element={<Store />}/>
          <Route exact path="/" element={ <Intro />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
