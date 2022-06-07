import React from "react";
import styled from "styled-components";
import { Container, Title } from "../Home";

const Content = styled.p`
  width: 30rem;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.04em;
  color: white;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  text-align: right;
  letter-spacing: 0.04em;
  margin-top: 2.25rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const ChipsList = styled.div`
  margin-top: 2.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem 0.5rem;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: flex-start;
  }
`;

const Chip = styled.div`
  background: #3ace3f;
  border-radius: 50px;
  padding-inline: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <Container>
      <div style={{ flex: 50 }}>
        <Title>About me</Title>
        <Content>
          I’m a web developer from Belgrade, Serbia. I specialize in javascript
          development with the React library. I am proficient in numerous
          libraries including, but not limited to Redux, Styled Components ,
          Tailwind, and frameworks like Next.js. My goal is to one day be a part
          of something great.
        </Content>
      </div>
      <div style={{ flex: 50 }}>
        <Subtitle>My Strong Suit</Subtitle>
        <ChipsList>
          <Chip>React</Chip>
          <Chip>Bootstrap</Chip>
          <Chip>ANT DESIGN</Chip>
          <Chip>MANTINE</Chip>
          <Chip>MUI</Chip>
          <Chip>SCSS</Chip>
          <Chip>next.js</Chip>
          <Chip>TAILWIND</Chip>
          <Chip>HTML5</Chip>
          <Chip>styled components</Chip>
          <Chip>redux</Chip>
          <Chip>css</Chip>
          <Chip>figma</Chip>
        </ChipsList>
      </div>
    </Container>
  );
};

export default About;
