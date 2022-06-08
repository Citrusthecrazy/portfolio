import React from "react";
import styled from "styled-components";
import { Container, Title } from "../Home";

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  overflow: none;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

const Card = styled.div`
  position: relative;
  background: #313f59;
  border-radius: 10px;
  width:23rem;
  height: 26rem;
  display: flex;
  flex-direction: column;

  & h1,h2,p{
    padding-right:1rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #3ace3f;
    width: 9px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const CardTitle = styled.h1`
  padding: 0;
  margin: 0;
  margin-left: 1rem;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 1em;
  }
`;

const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.715rem;
  padding: 0;
  margin: 0;
  margin-left: 1rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Description = styled.p`
  padding: 0;
  margin: 0;
  margin-left: 1rem;

  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.04em;
`;

const CardActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 1rem;
  padding-bottom: 0.75rem;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: #3ace3f;
  border-radius: 5px;
  width: 10rem;
  height: 3rem;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background: hsl(122.02, 60.16%, 44%);
  }
`;

const Source = ({ className, href, type = "source" }: any) => (
  <a className={className} href={href}>
    {type === "nda" ? "NDA" : "Source"}
  </a>
);
const SourceLink = styled(Source)`
  height: 3rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  text-decoration: none;
  color: white;
`;

const MyWork = () => {
  return (
    <Container>
      <div>
        <Title>Some of my work</Title>
        <CardList>
          <Card>
            <CardTitle>Vector World</CardTitle>
            <Subtitle>Project description</Subtitle>
            <Description>
              This is a website where users can upload vector graphics and
              search for others uploaded by other users.
            </Description>
            <CardActions>
              <a href="#" target="_blank">
                <Button>Live demo</Button>
              </a>
              <SourceLink href="#" />
            </CardActions>
          </Card>
          <Card>
            <CardTitle>Utopia Roleplay</CardTitle>
            <Subtitle>Project description</Subtitle>
            <Description>
              Website for a GTA V roleplay server powered by the FiveM platform.
              The site is used for accepting donations by Paypal.
            </Description>
            <CardActions>
              <a href="https://www.utopia-rp.com" target="_blank">
                <Button>Live demo</Button>
              </a>
              <SourceLink type="nda" />
            </CardActions>
          </Card>
          <Card>
            <CardTitle>This portfolio</CardTitle>
            <Subtitle>Project description</Subtitle>
            <Description>
              The website you’re currently on. I don’t think this needs any
              further explanation.
            </Description>
            <CardActions>
              <SourceLink href="#" />
            </CardActions>
          </Card>
        </CardList>
      </div>
    </Container>
  );
};

export default MyWork;
