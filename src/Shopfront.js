import React from "react";
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";

const Shopfront = ({budget, handleBrew, handleCustomer, handleSale, potions, discontinuePotion, customerArray}) => {
    return (
        <div className="center2">
            <CustomerList handleCustomer={handleCustomer} handleSale={handleSale} potions={potions} customerArray={customerArray}/>
            <PotionList potions={potions} handleBrew={handleBrew} discontinuePotion={discontinuePotion} budget={budget}/>
        </div>
    )
}

export default Shopfront