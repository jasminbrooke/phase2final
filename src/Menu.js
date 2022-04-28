import React, { useState, Component } from "react";
import { Form, Message, Card, Button } from 'semantic-ui-react'

const Menu = ({ handleForm, potions, discontinuePotion, getPotions }) => {
  const [name, setName] = useState('Potion')
  const [image, setImage] = useState('https://images-na.ssl-images-amazon.com/images/I/31GiArYZI5L.jpg')
  const [cost, setCost] = useState(0)


  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({ name, image, cost: 5, price: 10, inventory: 0 })
  }

  return (
    <div className="center">
      <div>
        <Card>
          <ul>
            {potions.map((potion, i) => (
              <li key={i}> {potion.id} {potion.name} ${potion.price}
                <button onClick={() => discontinuePotion(potion)}> X </button>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Form widths='equal' onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a Potion!</h3>
        <input
          type="text"
          name="name"
          placeholder="Name your potion..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Enter a potion's image URL..."
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="cost"
          placeholder="Name your price..."
          className="input-text"
          onChange={(e) => setCost(e.target.value)}
        />
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