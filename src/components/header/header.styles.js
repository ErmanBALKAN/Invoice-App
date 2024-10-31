import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  margin-left: 80px;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  span {
    margin-top: 3px;
    font-size: 16px;
    font-weight: bold;
    color: #E0E1E3;
  }
  div {
    margin-top: 3px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;
