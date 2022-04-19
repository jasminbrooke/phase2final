import React, { useState, useEffect } from "react";
import './App.css';
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";
import NewPotion from "./NewPotion";
import CustomerCard from "./CustomerCard";
import PotionCard from "./PotionCard";

function App() {
  const [potions, setPotions] = useState([])

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
      <CustomerList potions={potions}/>
      <CustomerCard />
      <PotionCard />
      <PotionList potions={potions}/>
      <NewPotion handleForm={handleForm}/>
    </div>
  );
}

export default App;
