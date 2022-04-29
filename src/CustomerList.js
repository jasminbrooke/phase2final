import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import CustomerCard from "./CustomerCard"

const CustomerList = ({potions, handleSale, customerArray}) => {
    
    return (
        <Card.Group itemsPerRow="5">
            {customerArray.map((customer, i) => <CustomerCard handleSale={handleSale} key={i} customer={customer} potions={potions}/>)}
        </Card.Group>
    )
}

export default CustomerList