import React, { useState } from "react";
import { Form, Input, Card } from 'semantic-ui-react'
import PotionCard from "./PotionCard";

const Menu = ({ handleForm, potions, discontinuePotion, getPotions }) => {
  const [name, setName] = useState('Potion')
  const [image, setImage] = useState('https://images-na.ssl-images-amazon.com/images/I/31GiArYZI5L.jpg')
  const [price, setPrice] = useState(0)


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
              <li key={i}> {potion.id} {potion.name} ${potion.price}
                { potion.id !== 0 && <button onClick={() => discontinuePotion(potion)}> X </button> }
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Form widths='equal' onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a Potion!</h3>
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
          <label>Image</label>
        <Input
          type="text"
          name="image"
          placeholder="Enter a potion's image URL..."
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
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
    </div>
  );
}

export default Menu