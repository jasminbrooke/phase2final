import React, { useState } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'
 
const PotionCard = ({budget, potion, handleBrew, discontinuePotion}) => {
    const {id, image, name, cost, description, ingredients, inventory} = potion
    const [disabled, setDisabled] = useState(false)
 
    // const [budget, setBudget] = useState(100)


    const handleClick = (potion) => {
        if (potion.cost < budget) {
        handleBrew(potion)
        setDisabled('disabled')
        setTimeout(() => { setDisabled(false)}, 3000)
        } else {
            alert("Not enough money!")
        }
    }

    return (
        <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{id} {name}</Card.Header>
        <Card.Meta>
            <span className='cost'>${cost}</span>
        </Card.Meta>
        <Card.Description>
            {description} {ingredients} {inventory}

        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Button className="btn btn-bubble" disabled={disabled} onClick={() => handleClick(potion)}><Icon name='lab' />Brew
            </Button>
            <Button onClick={() => discontinuePotion(potion)}>Discontinue</Button>
        </a>
        </Card.Content>
        </Card>
    )
}

export default PotionCard