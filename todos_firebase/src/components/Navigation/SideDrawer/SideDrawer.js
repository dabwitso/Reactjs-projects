import React, { useState } from "react";
import styled from "styled-components/macro";
import { Logo } from "../../Logo/Logo";
import { NavItems } from "../NavItems/NavItems";
import { Hamburger } from "./Hamburger/Hamburger";

const FixedWrapper = styled.div`
  position: fixed;
  z-index: 10;
  background-color: var(--color-main);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Menu = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--color-mainDark);
visibility: ${props => props.opened ? 'visible' : 'hidden'};
transform: translateY(${props => props.opened ? '0%' : '-100%'});
transition: all .1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
height: 100vh;
position: fixed;
margin-top: 6rem;
top: 0;
left: 0;

`;

export const SideDrawer = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
      <>
    <FixedWrapper>
      <Wrapper>
        <Logo />
        <Hamburger  opened={isOpened} clicked={()=>setIsOpened(!isOpened)}/>
      </Wrapper>
    </FixedWrapper>
    <Menu opened={isOpened}>
        <NavItems mobile />
    </Menu>
    </>
  );
};
