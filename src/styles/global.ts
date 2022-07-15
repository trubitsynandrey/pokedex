import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
    }
    #root{
        margin:0 auto;
    }

    .slick-list {
        /* overflow: visible; */
    }

    @keyframes pikaMovement {
        from {
            transform: translateY(0%);
        }
        to {
            transform: translateY(15%);
        }
    }
    
    #pikachu {
        animation: 4s ease-in-out infinite pikaMovement;
    }

    svg {
        max-height: 100%;
        width: auto;
    }
`;
