import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
        <Section 
            title="Model 3"
            description='Order Online for Touchless Delivery'
            bgimage="model-3.jpg"
            leftbtntext="Custom Order"
            rightbtntext="Exsiting Inventory" 
            downArrow="./images/down-arrow.svg"
        />
        <Section 
            title="Model Y"
            description='Order Online for Touchless Delivery'
            bgimage="model-y.jpg" 
            leftbtntext="Custom Order"
            rightbtntext="Exsiting Inventory" 
        />
        <Section 
            title="Model S"
            description='Order Online for Touchless Delivery'
            bgimage="model-s.jpg"
            leftbtntext="Custom Order"
            rightbtntext="Exsiting Inventory"  
        />
        <Section 
            title="Model X"
            description='Order Online for Touchless Delivery'
            bgimage="model-x.jpg"
            leftbtntext="Custom Order"
            rightbtntext="Exsiting Inventory"  
        />
        <Section 
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            bgimage="solar-panel.jpg"
            leftbtntext="Order Now"
            rightbtntext="Learn More"
        />
        <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            bgimage="solar-roof.jpg"
            leftbtntext="Order Now"
            rightbtntext="Learn More"
        />
        <Section 
            title="Assessories"
            description=""
            bgimage="accessories.jpg"
            leftbtntext="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`