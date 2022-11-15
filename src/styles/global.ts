import { createGlobalStyle } from "styled-components";
import { config } from "../configs/config";

export default createGlobalStyle`

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    color: ${config.colors.whiteText};
    font-family: 'Montserrat', sans-serif;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    background: ${`linear-gradient(to left, ${config.colors.primary} 50%, ${config.colors.teriary} 100%)`}  }
  a {
    text-decoration: none;
  }
  li {
    list-style-type: none;
  }
  table {
    margin: 0;
  }
`;
