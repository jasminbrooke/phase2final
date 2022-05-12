import React from "react";

const Intro = ({ budget }) => {
    return (
        <div className="center">
            <h3>Welcome to your very own potion shop!</h3>
            <p>Customers are lining up to buy your potions!</p>
            <p>Brew potions in your <b>Shopfront</b>. </p>
            <p>Use the <b>Menu</b> page to add new custom items to your selection.</p>
            <p>Budget wisely!</p>
            <p>You have ${budget}</p>
        </div>
    )
}

export default Intro