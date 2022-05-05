import React, { useEffect } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const CustomerCard = ({customer, handleSale, handleX, handleTimeout, index}) => {
  const {name:{title, first, last}, dob: {age}, picture: {thumbnail}, request} = customer

  useEffect(()=>{
    if(index === 0) {
      handleTimeout(customer)
    }
  }, [last])

  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={thumbnail}
        />
        <Card.Header>{first} {last}</Card.Header>
        <Card.Meta>Level {age} Adventurer</Card.Meta>
        <Card.Description>
          "Give me your strongest <p style={{fontWeight:'bold'}}>{request.name}!"</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button compact size='mini' basic color='green' onClick={() => handleSale(request, customer)}>
            <Icon name="check"/>
          </Button>
          <Button compact size='mini' basic color='red' onClick={() => handleX(customer)}>
            <Icon name="x" />
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default CustomerCard