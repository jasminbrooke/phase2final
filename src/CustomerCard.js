import React from "react";

const CustomerCard = ({customer: {name:{title, first, last}, dob: {age}, picture: {large, medium, thumbnail}}}) => {
    return (
        <div>
            <h4>{title} {first} {last}</h4>
            <img></img>
            <p>{age}, {thumbnail}</p>
        </div>
    )
}

export default CustomerCard