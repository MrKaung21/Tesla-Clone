import React from 'react'
import styled  from 'styled-components'

const Header = () => {
  return (
      <Container>
          <a>
              <img src="./images/logo.svg" alt="" />
          </a>
          <Menu>
              <p><a href='#'>Model 3</a></p>
              <p><a href='#'>Model y</a></p>
              <p><a href='#'>Model S</a></p>
              <p><a href='#'>Model X</a></p>
              <p><a href='#'>Solar Panels</a></p>
              <p><a href='#'>Solar Roof</a></p>
          </Menu>
          <RightMenu>
              <a href='#'>Shop</a>
              <a href='#'>Account</a>
          </RightMenu>
          
      </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    padding: 0 20px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;

      &:hover {
        background-color: lightgrey;
        padding: 10px;
        border-radius: 10px;
      }
    }
    
`

const RightMenu = styled.div`
    font-weight: 600;
    text-transform: uppercase;

    a {
      padding: 0 10px;

      &:hover {
        background-color: lightgrey;
        padding: 10px;
        border-radius: 10px;
      }
    }
`