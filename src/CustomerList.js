import React, { useEffect, useState } from "react";
import CustomerCard from "./CustomerCard"

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100&inc=name,dob,picture")
        .then(r => r.json())
        .then(data => setCustomers(data.results))
    }, [])

    const customerArray = customers.slice(0, 6)
    return (
        <div>
            {customerArray.map((customer, i) => <CustomerCard key={i} customer={customer} />)}
        </div>
    )
}

export default CustomerList