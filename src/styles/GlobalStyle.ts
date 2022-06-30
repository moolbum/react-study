import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html {
    font-size: 62.5%;
  }
  /* other styles */

  @font-face {
    font-family: "SF Pro";
    src: url('@public/fonts/SF-Pro-Display-Bold.otf') format('otf');
    font-weight: 700;
    font-style: bold;
  }

  @font-face {
    font-family: "SF Pro";
    src: url('@public/fonts/SF-Pro-Display-Medium.otf') format('otf');
    font-weight: 500;
    font-style: medium;
  }

  @font-face {
    font-family: "SF Pro";
    src: url('@public/fonts/SF-Pro-Display-Regular.otf') format('otf');
    font-weight: 400;
    font-style: regular;
  }

  * { 
    font-family: "Noto Sans KR", sans-serif !important;
    box-sizing: border-box;

    ${Number} {
      font-family: 'Lato', sans-serif !important;
    }
  }

  body {
    overflow: unset !important;
  }

  button, input {
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
  }

  
`;

export default GlobalStyle;
