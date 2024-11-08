import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    list-style: none;
    text-decoration: none;
    
    font-family: 'Nunito', 'Roboto', sans-serif;

    color: var(--primary-font-color);
  }

  button {
    background: none;
		cursor: pointer;
    border: none;
  }

  :root {
    --primary-color: #D1107A;
    --third-color: #2694E3;

    --primary-background: #0D0E12;
    --second-background: #FEFEFE;

    --primary-font-color: #000;

    --shadow-pink-color: rgba(0, 0, 0, 0.38);

  }

  body, html, #root {
    width: 100%;
    height: 100vh;
    position: relative;

    background: #F4F5F8;
  }
`;
