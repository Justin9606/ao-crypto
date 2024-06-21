import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f0f2f5;
    font-family: 'Arial', sans-serif;
  }
`;

export default GlobalStyle;
