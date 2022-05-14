import React, { useState } from "react";
import { Form, Input, Card, Grid, Popup, Image } from 'semantic-ui-react'
import Dandelion from "./assets/Dandelion.jpg" 
import Echinacea from "./assets/Echinacea.jpg"
import Elderberry from "./assets/Elderberry.jpg"
import Lavender from "./assets/Lavender.jpg"
import Lilac from "./assets/Lilac.jpg"
import Rosehip from "./assets/Rosehip.jpg"
import Rosemary from "./assets/Rosemary.jpg"
import Yarrow from "./assets/Yarrow.jpg"
import empty from "./assets/empty.png"


const Menu = ({ handleForm, potions, discontinuePotion }) => {
  const [name, setName] = useState('Mysterious Potion')
  const [image, setImage] = useState(empty)
  const [price, setPrice] = useState(10)
  const [description, setDes] = useState("A questionable potion with unknown effects...")

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({ name, image, cost: 5, price, inventory: 5, description })
  }

  const style = {
    width: '700px'
  }

  return (
    <div className="center">
      <div className="center">
        <Card centered> 
        <Card.Header> Menu </Card.Header>
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
        <p>Create Up To 3 Additional Potions</p>
        <Form.Field required>
          <label>Image</label>
          <Popup 
            on='click'
            position='right center'
            style={style}
            wide='very'
            trigger={<Image className='hover' size='medium' src={image} />}
          >
            <Grid centered >
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Image className='hover' src={Echinacea} onClick={e => {setImage(e.target.src)}}/>
                </Grid.Column>
                <Grid.Column>
                  <Image className='hover' src={Rosemary} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image className='hover' src={Yarrow} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image className='hover' src={Elderberry} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Image className='hover' src={Dandelion} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image className='hover' src={Lavender} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image className='hover' src={Rosehip} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
                <Grid.Column>
                  <Image className='hover' src={Lilac} onClick={e => setImage(e.target.src)}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Popup>
        </Form.Field>
        <Form.Field required>
          <label>Name</label>
          <Input
            type="text"
            name="name"
            placeholder="Name your potion..."
            className="input-text"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Input
            type="text"
            name="desc"
            placeholder="Describe..."
            className="input-text"
            onChange={(e) => setDes(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <Input
            error
            type="number" min="0" max="10000" step="1"
            name="price"
            placeholder="Name your price to make a profit..."
            className="input-text"
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </Form.Field>
        <input
          type="submit"
          name="submit"
          value="Create New Potion Menu Item"
          className="submit"
          disabled={potions.length === 4}
        />
      </Form>
    </div>
  );
}

export default Menu