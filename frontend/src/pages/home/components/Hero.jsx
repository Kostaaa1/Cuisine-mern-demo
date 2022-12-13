import React from "react";
import styled from "styled-components";

const Hero = () => {
    return (
        <HeroSection>
            <p>Hero</p>
        </HeroSection>
    );
};

const HeroSection = styled.div`
    background-color: white;
    width: 100%;
    min-height: 100vh;
`;

export default Hero;
