import React, { useState, useEffect } from "react";
import { Form, Input, Card, Grid, Popup, Image, Select } from 'semantic-ui-react'
import Dandelion from "./assets/Dandelion.jpg" 
import Echinacea from "./assets/Echinacea.jpg"
import Elderberry from "./assets/Elderberry.jpg"
import Lavender from "./assets/Lavender.jpg"
import Lilac from "./assets/Lilac.jpg"
import Rosehip from "./assets/Rosehip.jpg"
import Rosemary from "./assets/Rosemary.jpg"
import Yarrow from "./assets/Yarrow.jpg"
import empty from "./assets/empty.png"


const Menu = ({ handleForm, potions, discontinuePotion, getPotions }) => {
  const [name, setName] = useState('Potion')
  const [image, setImage] = useState(empty)
  const [price, setPrice] = useState(10)
  const [description, setDes] = useState("A mysterious potion with unknown effects...")

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({ name, image, cost: 5, price, inventory: 10, description })
  }

  const style = {
    width: '700px'
  }

  return (
    <div className="center">
      <div className="center">
        <Card>
          <ul>
            {potions.map((potion, i) => (
              <li key={i}> <Image avatar src={potion.image}></Image> {potion.name} ${potion.price}
                { potion.id !== 0 && <button onClick={() => discontinuePotion(potion)}> X </button> }
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Form widths='equal' onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a Potion!</h3>
        <Form.Field required>
          <label>Image</label>
          <Popup 
            on='click'
            position='right center'
            style={style}
            wide='very'
            trigger={<Image size='medium' src={image} />}
          >
            <Grid centered >
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Image src={Echinacea} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Rosemary} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Yarrow} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Elderberry} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Image src={Dandelion} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Lavender} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Rosehip} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src={Lilac} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
                        {/* onChange={(e, data) => {
                        setImage(data.value)
                          }}> */}
          </Popup>
        </Form.Field>
        <Form.Field required>
          <label>Name</label>
          <Input
            error={{ content: 'Please enter a name', pointing: 'below' }}
            type="text"
            name="name"
            placeholder="Name your potion..."
            className="input-text"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field required>
          <label>Description</label>
          <Input
            type="text"
            name="price"
            placeholder="Describe..."
            className="input-text"
            onChange={(e) => setDes(e.target.value)}
          />
        </Form.Field>
        <Form.Field required>
          <label>Price</label>
          <Input
            error={{ content: 'Please set a price', pointing: 'below' }}
            type="text"
            name="price"
            placeholder="Name your price to make a profit..."
            className="input-text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>
        <input
          type="submit"
          name="submit"
          value="Create New Potion Menu Item"
          className="submit"
        />
      </Form>
    </div>
  );
}

export default Menu