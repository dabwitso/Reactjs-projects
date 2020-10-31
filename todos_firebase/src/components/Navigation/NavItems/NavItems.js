import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'};
  align-items: center;
  height: 100%;
`;

export const NavItems = ({mobile}) => {
  return (
    <Nav mobile={mobile}>
      <Ul mobile={mobile}>
        <NavItem mobile={mobile} link='/'>Home</NavItem>
        <NavItem link='/todos'>Todos</NavItem>
      </Ul>
    </Nav>
  );
};
