import React from "react";
import CustomerList from "./CustomerList";
import PotionList from "./PotionList";

const Shopfront = ({handleBrew, handleSale, potions}) => {
    return (
        <>
            <CustomerList handleSale={handleSale} potions={potions}/>
            <PotionList potions={potions} handleBrew={handleBrew}/>
        </>
    )
}

export default Shopfront