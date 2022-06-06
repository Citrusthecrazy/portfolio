import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";

const Wrapper = styled.div`
  padding: 0% 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
`;
const Logo = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 3rem;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Logo>Marko Drakulić</Logo>
      <Nav>
        <NavItem
          active={window.location.pathname === "/"}
          onClick={() => navigate("/")}>
          Home
        </NavItem>
        <NavItem
          active={window.location.pathname === "/about-me"}
          onClick={() => navigate("/about-me")}>
          About me
        </NavItem>
        <NavItem
          active={window.location.pathname === "/my-work"}
          onClick={() => navigate("/my-work")}>
          My work
        </NavItem>
        <NavItem
          active={window.location.pathname === "/contact"}
          onClick={() => navigate("/contact")}>
          Contact
        </NavItem>
      </Nav>
    </Wrapper>
  );
};

export default Header;
