import React, { useState } from "react";

const Menu = ({handleForm}) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm({name, image, cost: 0})
  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Create a Potion!</h3>
        <input
          type="text"
          name="name"
          placeholder="Name your potion..."
          className="input-text"
          onChange={(e) => setName(e.target.value)}
          />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a potion's image URL..."
          className="input-text"
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Brew New Potion"
          className="submit"
        />
      </form>
    </div>
  );
}

export default Menu