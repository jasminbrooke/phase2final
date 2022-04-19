import React, { useState, useEffect } from "react";
import './App.css';
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";
import NewPotion from "./NewPotion";
import NavBar from "./NavBar";
// import { BrowerRouter, Route, Switch } from "react-router-dom";

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
      <NewPotion />
    </div>
  );
}

export default App;
