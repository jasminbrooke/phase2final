import React from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const CustomerCard = ({customer: {name:{title, first, last}, dob: {age}, picture: {large, medium, thumbnail}}}) => {
    return (
        <Card>
            <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={medium}
        />
        <Card.Header>{title} {first} {last}</Card.Header>
        <Card.Meta>{age}</Card.Meta>
        <Card.Description>
          REQUEST
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
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