import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { NavItems } from '../NavItems';

const Li = styled.li`
display: flex;
height: 100;
`;

const StyledNavLink = styled(NavLink)`
display: flex;
align-items: center;
text-transform: uppercase;
border-bottom: 2px solid transparent;
font-size: 1.2rem;
padding: 1rem;
margin: 0 1rem;
font-weight: 400;
color: var(--color-white);
transition: all 0.2s;

&:hover {
    border-bottom: 2px solid var(--color-white);
}
`;

export const NavItem = ({link, children, mobile}) => {
    return (
        <Li>
            <StyledNavLink mobile={mobile} to={link}>{children}</StyledNavLink>
        </Li>
    )
}
