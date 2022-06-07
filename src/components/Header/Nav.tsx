import styled from "styled-components";

export const Nav = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
