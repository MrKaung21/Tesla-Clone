import { React,useState } from 'react'
import styled  from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <Container>
          <a style={{width: '25%', paddingLeft: '20px', cursor: "pointer"}}>
              <img src="./images/logo.svg" alt="" />
          </a>
          <Menu>
              <p><a href='#'>Model 3</a></p>
              <p><a href='#'>Model Y</a></p>
              <p><a href='#'>Model S</a></p>
              <p><a href='#'>Model X</a></p>
              <p><a href='#'>Solar Panels</a></p>
              <p><a href='#'>Solar Roof</a></p>
          </Menu>
          <RightMenu>
              <a href='#'>Shop</a>
              <a href='#'>Account</a>
              <a href='#' onClick={() => setMenuOpen(true)}>Menu</a>
          </RightMenu>
          <MobileNav show={menuOpen}>
              <CloseDiv>
                  <CloseIcon onClick={() => setMenuOpen(false)}/>
              </CloseDiv>
              <li><a href="#">Model 3</a></li>
              <li><a href="#">Model Y</a></li>
              <li><a href="#">Model S</a></li>
              <li><a href="#">Model X</a></li>
              <li><a href="#">Solar Roof</a></li>
              <li><a href="#">Solar Panels</a></li>
              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Used Inventory</a></li>
              <li><a href="#">Trade-In</a></li>
              <li><a href="#">Test Drive</a></li>
          </MobileNav>
      </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    min-height: 60px;

    position: fixed;
    
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    
`
const Menu = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;

    p {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      transition: all 0.3s ease-out;

      &:hover {
        background-color: lightgrey;
        padding: 10px;
        border-radius: 10px;
      }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
    
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        display: none;
    }
`

const RightMenu = styled.div`
    width: 25%;
    text-align: center;
    

    a {
      padding: 0 10px;
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.3s ease-out;

      &:hover {
        background-color: lightgrey;
        padding: 10px;
        border-radius: 10px;
      }
    }

    @media screen and (max-width: 768px) {
        width: 70%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        
        a {
            padding: 0 10px;
        }
    }
`

const MobileNav = styled.div`
    width: 50%;

    background: white;
    list-style: none;
    padding: 20px;

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'} ;
    transition: transform 0.5s ease-out;
    li {
        padding: 15px 0;
        margin-left: 40px;
        
        a {
          font-weight: 600;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 30%;
    }
`

const CloseIcon = styled(ClearIcon)`
    cursor: pointer;
    background: lightgrey;
    border-radius: 100%;
`
const CloseDiv = styled.div`
    
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`