import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
            title="Model 3"
            bgimage="model-3.jpg" 
            downArrow="./images/down-arrow.svg"
        />
        <Section 
            title="Model Y"
            bgimage="model-y.jpg"  
        />
        <Section 
            title="Model S"
            bgimage="model-s.jpg"  
        />
        <Section 
            title="Model X"
            bgimage="model-x.jpg"  
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`