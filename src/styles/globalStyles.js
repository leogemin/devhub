import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            color: white;
            font-family: "SUSE", sans-serif;
            cursor: default;
            user-select: none;
      }

      :root {
            --darkGray: #1a1a1a; // cor do fundo
            --mediumGray: #333333; // cor da titlebar + footer
            --lightGray: #d3d3d3; // não sei aonde tem isso

            overflow-x: hidden;
            overflow-y: hidden;

            ::-webkit-scrollbar-track {
            background: none;  
            }

            ::-webkit-scrollbar {
            width: 8px;
            background-color: none; 
            }

            ::-webkit-scrollbar-thumb {
            background-color: #7a7a7a;
            border-radius: 20px;
            }
      }

      body {
            background-color: #1a1a1aE5
      }

      input {
            cursor: text;
      }
      a {
            text-decoration: none
      }
`

export default GlobalStyles