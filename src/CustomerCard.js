import React, { useState, useEffect } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const CustomerCard = ({customer, potions, handleSale}) => {
  const {name:{title, first, last}, dob: {age}, picture: {medium}} = customer
  const [potion, setPotion] = useState({})
  
  useEffect(() => {
    setPotion(potions[Math.floor(Math.random() * potions.length)])
  }, [])

  return (
        <Card>
            <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={medium}
        />
        <Card.Header>{title} {first} {last}</Card.Header>
        <Card.Meta>Level {age}</Card.Meta>
        <Card.Description>
          <Icon name="lab"/> "Give me your strongest <p style={{fontWeight:'bold'}}>{potion.name}!"</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => handleSale(potion, customer)}>
            <Icon name="check"/>
          </Button>
          <Button basic color='red'>
            <Icon name="x" />
          </Button>
        </div>
      </Card.Content>
        </Card>
    )
}

export default CustomerCard