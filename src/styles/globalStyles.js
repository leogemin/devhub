import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      * {
            margin: 0;
            box-sizing: border-box;
            color: white;
            font-family: "SUSE", sans-serif;
      }

      :root {
            overflow-x: hidden;
            overflow-y: hidden;
      }

      body {
            background-color: #1a1a1aE5;
      }
`

export default GlobalStyles