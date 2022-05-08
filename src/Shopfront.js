import React from "react";
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";

const Shopfront = ({budget, handleBrew, handleSale, potions, discontinuePotion, customerArray, handleCount}) => {
    return (
        <div className="center2">
            <CustomerList handleSale={handleSale} potions={potions} customerArray={customerArray} handleCount={handleCount}/>
            <PotionList potions={potions} handleBrew={handleBrew} discontinuePotion={discontinuePotion} budget={budget}/>
        </div>
    )
}

export default Shopfront