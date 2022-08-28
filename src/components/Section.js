import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Section = ({ title, bgimage, downArrow, leftbtntext, rightbtntext, description }) => {
  return (
    <MainSection bgimage={bgimage}>
        <Fade bottom>
            <MainTitle>
                <h1>{title}</h1>
                <p>{description}</p>
            </MainTitle>
        </Fade>
        <Buttons>
            <ButtonGroup>
                <Fade left>
                    <LeftButton>
                        {leftbtntext}
                    </LeftButton>
                </Fade>
                <Fade right>
                    { rightbtntext &&
                        <RightButton>
                            {rightbtntext}
                        </RightButton>
                    }
                </Fade>
            </ButtonGroup>
            <Fade top>
                <DownArrow src={downArrow}></DownArrow>
            </Fade>
        </Buttons>
    </MainSection>
  )
}

export default Section

const MainSection = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => `url('./images/${props.bgimage}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    h1 {
        padding-bottom: 10px;
    }
    
`
const MainTitle = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    width: 256px;
    height: 40px;
    color: white;
    background-color: rgba(23, 26, 32, 0.8);
    
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    margin-bottom: 10px;
    height: 40px;
    opacity: 0.85;
    cursor: pointer;
    animation: downArrow infinite 1.5s;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 25px;
`