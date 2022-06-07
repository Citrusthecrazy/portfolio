import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import programmer from "../../assets/programmer.svg";

export const Container = styled.div`
  padding: 0% 10%;
  padding-top: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;

  @media screen and (max-width: 768px) {
    padding-top: 5rem;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  position: relative;
  margin: 0;
  font-weight: 700;
  font-size: 5rem;
  line-height: 7.5rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0;
  padding-left: calc(1rem + 0.5rem);

  &::before {
    content: "";
    max-height: 0.5em;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    border: 0.5rem solid #3ace3f;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 1em;
  }
`;

const Content = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  max-width: 30rem;

  color: rgba(102, 115, 140, 0.79);

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    line-height: 2rem;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  width: 31.25rem;
  height: 6rem;
  background: #3ace3f;
  border-radius: 10px;

  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: white;
  transition: all 0.15s ease-in-out;
  &:hover {
    cursor: pointer;
    background: hsl(122.02702702702703, 60.16260162601627%, 44%);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
  }
`;

const Image = styled.img`
  max-height: 26.37rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <Title>I'm Marko</Title>
        <Content>
          A front end developer trying to make the web a better and prettier
          place
        </Content>
        <Button onClick={() => navigate("/about-me")}>Find out more</Button>
      </div>
      <Image src={programmer} alt="programmer" />
    </Container>
  );
};

export default Home;
