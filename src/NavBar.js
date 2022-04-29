import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

function NavBar() {
  return (
    <Menu fluid widths={4}>
        <Menu.Item to="/" exact as={NavLink} name="Intro" />
        <Menu.Item to="/menu" exact as={NavLink} name="Menu" />
        <Menu.Item to="/shopfront" exact as={NavLink} name="Shop Front" />
    </Menu>
  )
}

export default NavBar;
