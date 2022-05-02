import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import CustomerCard from "./CustomerCard"

const CustomerList = ({potions, handleSale, customerArray, handleX}) => {
    // let random = potions[Math.floor(Math.random() * potions.length)]
    // customerArray.forEach(customer => {
    //     customer.request = random
    // });
    return (
        <Card.Group itemsPerRow="5">
            {customerArray.map((customer, i) => 
            <CustomerCard handleX={handleX} handleSale={handleSale} key={i} customer={customer} potions={potions}/>)}
        </Card.Group>
    )
    
}

export default CustomerList