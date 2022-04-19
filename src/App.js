import React, { useState, useEffect } from "react";
import './App.css';
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";

function App() {
  const [potions, setPotions] = useState([])

    useEffect(() => {
    fetch("http://localhost:3001/potions")
    .then(r => r.json())
    .then(data => setPotions(data)) 
    }, [])
  return (
    <div>
      <CustomerList potions={potions}/>
      <PotionList potions={potions}/>
    </div>
  );
}

export default App;
