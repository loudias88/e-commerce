import React from 'react'
import { Link } from 'react-router-dom'
import StyledComponent from 'styled-components'

const HeaderArea = StyledComponent.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    background-color: black;
    padding: 20px;
    margin-bottom: 70px;

    a {
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Header = () => {
  return (
    <HeaderArea>
        <Link to="/">Store</Link>
        <Link to="/cart">Cart</Link>
    </HeaderArea>
  )
}
