import React, { useState } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'
 
const PotionCard = ({potion, handleBrew}) => {
    const {id, image, name, cost, description, ingredients, inventory} = potion
    // const [budget, setBudget] = useState(100)

    return (
        <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
            <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
            {description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Button onClick={() => handleBrew(potion)}><Icon name='lab' />Brew
            </Button>
            {ingredients} {inventory}
        </a>
        </Card.Content>
        </Card>
    )
}

export default PotionCard