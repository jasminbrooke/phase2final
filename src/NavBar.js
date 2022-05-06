import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

function NavBar( { budget }) {
  return (
    <div>
      <Menu fluid widths={4}>
          <Menu.Item name="Current Budget" content={`Current Budget: ${budget}`}/>
          <Menu.Item to="/" as={NavLink} name="Intro" />
          <Menu.Item to="/shopfront" as={NavLink} name="Shop Front" />
          <Menu.Item to="/menu" as={NavLink} name="Menu" />
      </Menu>
    </div>
  )
}

export default NavBar;
