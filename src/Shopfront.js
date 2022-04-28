import React, { useState } from "react";
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";

const Shopfront = ({budget, handleBrew, handleSale, potions, discontinuePotion}) => {
    return (
        <div className="center2">
            <CustomerList handleSale={handleSale} potions={potions}/>
            <br></br>
            <div className="center"><h2>Budget: ${budget}</h2></div>
            <PotionList potions={potions} handleBrew={handleBrew} discontinuePotion={discontinuePotion} budget={budget}/>
        </div>
    )
}

export default Shopfront