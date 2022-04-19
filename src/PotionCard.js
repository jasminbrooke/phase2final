import React from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const PotionCard = ({potion: {image, name, description, ingredients}}) => {
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
            <Button><Icon name='lab' />Brew
            </Button>
            {ingredients}
        </a>
        </Card.Content>
        </Card>
    )
}

export default PotionCard