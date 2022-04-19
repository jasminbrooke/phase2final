import React, { useState } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'
 
const PotionCard = ({potion: {id, image, name, cost, description, ingredients, inventory}}) => {
    const [stock, setStock] = useState(inventory)
    const [budget, setBudget] = useState(100)


    const handleBrew = () => {
        fetch(`http://localhost:3001/potions/${id}`, {
          method: 'PATCH',
          headers: {'content-Type': 'application/json'},
          body: JSON.stringify({inventory: stock + 1})
        })
        .then(() => setStock(stock + 1))
        .then(() => setBudget(budget - cost))
      }

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
            <Button onClick={() => handleBrew()}><Icon name='lab' />Brew
            </Button>
            {ingredients} {stock}
        </a>
        </Card.Content>
        </Card>
    )
}

export default PotionCard