import React, { useState } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import Coins from "./assets/Coins.jpg";
import Reject from "./assets/Reject.png";

const CustomerCard = ({customer, handleSale, handleCustomer}) => {
  const {name:{first, last}, dob: {age}, picture: {thumbnail}, request, build} = customer
  const [rejected, setRejected] = useState(false)
  const [served, setServed] = useState(false)

  const handleCheck = () => {
    setServed(true)
    handleSale(request, customer)
  }

  const handleReject = () => {
    setRejected(true)
  }
  const renderContent = (() => {
    if(served) {
      return (
        <>
        <Image
          floated='right'
          size='tiny'
          src={Coins}
        />
        <Card.Header>Thank you!</Card.Header>
        <Card.Meta>+${request.price}</Card.Meta>
        </>
      )
    }
    else if(rejected) {
      return (
        <Image
          floated='right'
          size='mini'
          src={Reject}
        />
      )
    }
    else {
      return (
        <>
          <Image
            floated='right'
            size='mini'
            src={thumbnail}
          />
          <Card.Header>{first} {last}</Card.Header>
          <Card.Meta>Level {age} {build}</Card.Meta>
          <Card.Description>
            "Give me your strongest <p style={{fontWeight:'bold'}}>{request.name}!"</p>
          </Card.Description>
        </>
      )
    }
  })()

  return (
    <Card>
      <Card.Content>
        {renderContent}
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button disabled={served || rejected} compact size='mini' basic color='green' onClick={() => handleCheck()}>
            <Icon name="check"/>
          </Button>
          <Button disabled={served || rejected} compact size='mini' basic color='red' onClick={() => handleReject()}>
            <Icon name="x" />
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default CustomerCard