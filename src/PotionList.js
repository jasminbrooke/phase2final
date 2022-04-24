import React from "react";
import { Card } from 'semantic-ui-react'
import PotionCard from "./PotionCard";


const PotionList = ({potions, handleBrew}) => {
    return (
        <Card.Group itemsPerRow="4">
            {potions.map((potion, i) => <PotionCard handleBrew={handleBrew} key={i} potion={potion} />)}
        </Card.Group>
    )
}

export default PotionList