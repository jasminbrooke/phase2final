import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import CustomerCard from "./CustomerCard"

const CustomerList = ({potions, handleSale, customerArray, handleX, handleTimeout}) => {

        
    return (
        <Card.Group itemsPerRow="5">
            {
                customerArray.map((customer, i) => 
                    <CustomerCard handleX={handleX} handleSale={handleSale} key={i} index={i} customer={customer} handleTimeout={handleTimeout}/>
                )
            }
        </Card.Group>
    )
    
}

export default CustomerList