import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "./Nav";
import { NavItem } from "./NavItem";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Wrapper = styled.div`
  padding: 0% 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;

  @media screen and (max-width: 768px) {
    padding: 0% 5%;
    padding-top: 1.5rem;
  }
`;
const Logo = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  &:hover{
    cursor: pointer;
  }
`;

const MenuButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 1.25rem;
  border-radius: 50px;
  transition: all 0.15s ease-in-out;
  padding: 0.5rem 0.5rem;

  &:focus {
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

interface Drawer {
  open: boolean;
}

const Drawer = styled.div<Drawer>`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${(props) => (props.open ? "flex" : "none")};
  width:75vw;
  flex-direction: column;
  background-color: white;
  color: #242e42;
  z-index: 999;
  & * {
    margin-left: 1rem;
  }

  & ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    & li {
      font-size: 1.25rem;
    }
  }
`;

const CloseDrawerButton = styled.button`
  position: absolute;
  top: 2.25rem;
  right: 1rem;

  background: none;
  border: none;
`;

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerNav = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };
  return (
    <Wrapper>
      <Logo onClick={() => navigate('/')}>Marko Drakulić</Logo>
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
      <MenuButton onClick={() => setDrawerOpen(true)}>
        <AiOutlineMenu />
      </MenuButton>
      <Drawer open={drawerOpen}>
        <h1>Menu</h1>
        <CloseDrawerButton onClick={() => setDrawerOpen(false)}>
          <AiOutlineClose />
        </CloseDrawerButton>
        <ul>
          <li onClick={() => handleDrawerNav("/")}>Home</li>
          <li onClick={() => handleDrawerNav("/about-me")}>About me</li>
          <li onClick={() => handleDrawerNav("/my-work")}>My Work</li>
          <li onClick={() => handleDrawerNav("/contact")}>Contact</li>
        </ul>
      </Drawer>
    </Wrapper>
  );
};

export default Header;
