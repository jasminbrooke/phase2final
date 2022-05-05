import React from "react";
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";

const Shopfront = ({budget, handleBrew, handleSale, handleTimeout, potions, discontinuePotion, customerArray, handleX}) => {
    return (
        <div className="center2">
            <CustomerList handleX={handleX} handleTimeout={handleTimeout} handleSale={handleSale} potions={potions} customerArray={customerArray}/>
            <PotionList potions={potions} handleBrew={handleBrew} discontinuePotion={discontinuePotion} budget={budget}/>
        </div>
    )
}

export default Shopfront