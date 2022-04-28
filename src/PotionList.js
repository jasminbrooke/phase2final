import React from "react";
import { Card } from 'semantic-ui-react'
import PotionCard from "./PotionCard";


const PotionList = ({budget, potions, handleBrew, discontinuePotion}) => {
    return (
        <Card.Group itemsPerRow="4">
            {potions.map((potion, i) => <PotionCard discontinuePotion={discontinuePotion} handleBrew={handleBrew} potion={potion} budget={budget} key={i}/>)}
        </Card.Group>
    )
}

export default PotionList