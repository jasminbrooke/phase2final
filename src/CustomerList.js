import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import CustomerCard from "./CustomerCard"

const CustomerList = ({potions, handleSale, customerArray, handleCount}) => {
    const [builds, setbuilds] = useState([])

    useEffect(() => {
        fetch("https://phase2-db.herokuapp.com/build")
        .then(r => r.json())
        .then(data => setbuilds(data))
    }, []);

    customerArray.forEach(customer => {
        if(!customer.request) {
            customer.request = potions[Math.floor(Math.random() * potions.length)]
            customer.build = builds[Math.floor(Math.random() * 3)]
        }
    });
        
    return (
        <Card.Group itemsPerRow="5">
            {
                customerArray.map((customer, i) => 
                    <CustomerCard handleSale={handleSale} key={i} customer={customer} handleCount={handleCount} potions={potions}/>
                )
            }
        </Card.Group>
    )
    
}

export default CustomerList