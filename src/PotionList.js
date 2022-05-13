import React from "react";
import { Card } from 'semantic-ui-react'
import PotionCard from "./PotionCard";


const PotionList = ({budget, potions, handleBrew, discontinuePotion, handleModal}) => {
    return (
        <Card.Group centered itemsPerRow="4">
            {potions.map((potion, i) => <PotionCard discontinuePotion={discontinuePotion} handleBrew={handleBrew} potion={potion} budget={budget} key={i} handleModal={handleModal}/>)}
        </Card.Group>
    )
}

export default PotionList