import React, { useState, useEffect } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const CustomerCard = ({customer: {name:{title, first, last}, dob: {age}, picture: {large, medium, thumbnail}}, potion, handleSale}) => {
  return (
        <Card>
            <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={medium}
        />
        <Card.Header>{title} {first} {last}</Card.Header>
        <Card.Meta>{age}</Card.Meta>
        <Card.Description>
          <Icon name="lab"/> {potion.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={() => handleSale(potion)}>
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