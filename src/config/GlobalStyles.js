import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fafbff;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
  }
`
