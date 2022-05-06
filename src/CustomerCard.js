import React, { useEffect, useState } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import Coins from "./assets/Coins.jpg";
import Sad from "./assets/Sad.jpg";

const CustomerCard = ({customer, handleSale, handleCount}) => {
  const {name:{first, last}, dob: {age}, picture: {thumbnail}, request, build} = customer
  const [served, setServed] = useState(false)
  const [soldout, setSoldout] = useState(false)

  useEffect(() => {
    setServed(false)
    setSoldout(false)
  }, [customer])

  const handleCheck = () => {
    if(request.inventory === 0) {
      setSoldout(true)
      handleCount()}
    else {
      setSoldout(false)
      setServed(true)
      handleSale(request, customer)
      handleCount()}
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
        <Card.Header>"Thank you!"</Card.Header>
        <Card.Meta>+${request.price}</Card.Meta>
        </>
      )
    }
    else if (soldout)
    {
      return (
        <>
        <Image
          floated='right'
          size='tiny'
          src={Sad}
        />
        <Card.Header>"Aww... that's what I came for..."</Card.Header>
        <Card.Meta>+0</Card.Meta>
        </>
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
          <Button disabled={served || soldout} compact size='mini' basic color='green' onClick={() => handleCheck()}>
            <Icon name="check"/>
          </Button>
          {/* <Button disabled={served || rejected} compact size='mini' basic color='red' onClick={() => handleReject()}>
            <Icon name="x" />
          </Button> */}
        </div>
      </Card.Content>
    </Card>
  )
}

export default CustomerCard