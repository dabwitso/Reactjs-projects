import React from 'react'
import styled from 'styled-components/macro'

const LogoWrapper = styled.div`
padding: 1rem;
color: var(--color-white);
font-size: 1.2rem;
display: flex;
align-items: center;
height: 100%;
font-weight: 700;
`;


export const Logo = () => {
    return (
        <LogoWrapper>
            Productivity 
        </LogoWrapper>
    )
}
