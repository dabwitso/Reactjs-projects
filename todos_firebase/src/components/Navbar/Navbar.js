import React from 'react'
import styled from 'styled-components'
import { Logo } from '../Logo/Logo';

const Wrapper = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
background-color: var(--color-main);
padding: 0rem 2rem;
top: 0;
left: 0;
width: 100%;
height: 6rem;
`;

export const Navbar = () => {
    return (
        <Wrapper>
            <Logo/>
            <nav>
                <ul>
                    <li>asdfas</li>
                </ul>
            </nav>
        </Wrapper>
    )
}
