import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  body {
    background-color: #17181f;
    font-family: 'Outfit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  /* Custom Scrollbar */

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;   
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`;

export default GlobalStyles;