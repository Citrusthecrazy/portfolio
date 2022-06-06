import styled from "styled-components";

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  position: relative;
  font-size: 1.5rem;
  font-weight: 700;

  &:hover {
    cursor: pointer;

    &::before {
      height: 10px;
      width: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0%")};
    height: 2px;
    border-bottom: 2px solid #3ace3f;
    transition: 0.5s width ease-in-out;
  }
`;
