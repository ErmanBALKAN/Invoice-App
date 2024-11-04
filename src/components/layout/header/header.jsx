import { HeaderContainer, HeaderContent, Logo } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <button>X</button>
          <span>Invoice &#8226;</span>
          <div>New invoice #INV-71</div>
        </Logo>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
