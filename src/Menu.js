import React, { useState } from "react";
import { Form, Input, Card, Dropdown, Button, Grid, Popup, Image } from 'semantic-ui-react'
import Dandelion from "./assets/Dandelion.jpg"
import Echinacea from "./assets/Echinacea.jpg"
import Elderberry from "./assets/Elderberry.jpg"
import Lavender from "./assets/Lavender.jpg"
import Rosehip from "./assets/Rosehip.jpg"
import Lilac from "./assets/Lilac.jpg"
import Yarrow from "./assets/Yarrow.jpg"
import Rosemary from "./assets/Rosemary.jpg"
import empty from "./assets/empty.png"

const Menu = ({ handleForm, potions, discontinuePotion, getPotions }) => {
  const [name, setName] = useState('Potion')
  const [image, setImage] = useState({empty})
  const [price, setPrice] = useState(0)

  const imageOptions = [
    {image: { avatar: true, src: empty },
    key: '1',
    text: 'x',
    value: 'Empty',
},
    {image: { avatar: true, src: Dandelion },
    key: '1',
    text: 'x',
    value: 'Dandelion',
},
    {image: { avatar: true, src: Echinacea },
    key: '2',
    text: 'x',
    value: 'Echinacea'
},
    {image: { avatar: true, src: Elderberry },
    key: '3',
    text: 'x',
    value: 'Elderberry'
},
    {image: { avatar: true, src: Lavender },
    key: '4',
    text: 'x',
    value: 'Lavender'
},
    {image: { avatar: true, src: Rosehip },
    key: '5',
    text: 'x',
    value: 'Rosehip'
},
    {image: { avatar: true, src: Lilac },
    key: '6',
    text: 'x',
    value: 'Lilac'
},
    {image: { avatar: true, src: Yarrow },
    key: '7',
    text: 'x',
    value: 'Yarrow'
},
    {image: { avatar: true, src: Rosemary },
    key: '8',
    text: 'x',
    value: 'Rosemary'
},
  ]


  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({ name, image, cost: 5, price, inventory: 0 })
  }

  return (
    <div className="center">
      <div>
        <Card>
          <ul>
            {potions.map((potion, i) => (
              <li key={i}> {potion.name} ${potion.price}
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
          <Dropdown
            placeholder='Select Image'
            fluid
            selection
            options={imageOptions}
            onChange={(e, data) => {
              setImage(data.value)
            }}
          />
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
        <Form.Field required>
          <label>Price</label>
          <Input
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



            <div>
            <Popup wide trigger={
            <Image size= 'tiny' src={empty} />} on='click'>
              <Grid divided columns='equal'>
                <Grid.Column>
                    <Image size= 'tiny' src={Echinacea} fluid />
                    <Image size= 'tiny' src={Rosemary} fluid />
                    <Image size= 'tiny' src={Yarrow} fluid />
                    <Image size= 'tiny' src={Elderberry} fluid />
                  </Grid.Column>
                  <Grid.Column>
                    <Image size= 'tiny' src={Dandelion} fluid />
                    <Image size= 'tiny' src={Lavender} fluid />
                    <Image size= 'tiny' src={Rosehip} fluid />
                    <Image size= 'tiny' src={Lilac} fluid />
                  </Grid.Column>
              </Grid>
            </Popup>
            </div>


    </div>
  );
}

export default Menu