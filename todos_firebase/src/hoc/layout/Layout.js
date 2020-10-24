import React from 'react'
import styled from 'styled-components';
import { Navbar } from '../../components/Navbar/Navbar';

const MainWrapper = styled.div`
width: 100%;
min-height: calc(100vh - 6rem);
margin-top: 6rem;
`;

export default function Layout({children}) {
    return (
        <>
        <Navbar/>
        <MainWrapper>{children}</MainWrapper>
        </>
    )
}
