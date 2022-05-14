import React, { useState } from "react";
import { Button } from "semantic-ui-react"

const Intro = ({ budget, resetDB, setBudget }) => {
    const [showBubbles, setShowBubbles] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const handleClick = () => {
        resetDB()
        setBudget(100)
        setDisabled(true)
        setShowBubbles(true)
        setTimeout(() => { 
            setShowBubbles(false)
            setDisabled(false)
        }, 3500)
    }

    return (
        <div className="center">
            <h3>Welcome to your very own potion shop!</h3>
            <p>Customers are lining up to buy your potions!</p>
            <p>Brew potions in your <b>Shopfront</b>. </p>
            <p>Use the <b>Menu</b> page to add new custom items to your selection.</p>
            <p>Budget wisely!</p>
            <p>You have ${budget}</p>
            <Button id="gooey-button" disabled={disabled} onClick={() => handleClick()}> Reset Game
                { showBubbles && (
                    <span className="bubbles">
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                        <span className="bubble"></span>
                    </span>
                )}
            </Button>
        </div>
    )
}

export default Intro