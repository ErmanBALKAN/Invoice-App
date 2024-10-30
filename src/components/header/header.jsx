import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  height: 100%;
  display: flex;
  margin-left: 80px;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.h1`
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
  h6 {
    margin-top: 3px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <button>X</button>
          <span>Invoice &#8226;</span>
          <h6>New invoice #INV-71</h6>
        </Logo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
