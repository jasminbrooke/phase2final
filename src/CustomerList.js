import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import CustomerCard from "./CustomerCard"

const CustomerList = ({potions}) => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100&inc=name,dob,picture")
        .then(r => r.json())
        .then(data => setCustomers(data.results))
    }, [])

    const customerArray = customers.slice(0, 5)
    return (
        <Card.Group itemsPerRow="5">
            {customerArray.map((customer, i) => <CustomerCard key={i} customer={customer} potions={potions}/>)}
        </Card.Group>
    )
}

export default CustomerList