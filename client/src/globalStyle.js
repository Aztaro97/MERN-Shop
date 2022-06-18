import { createGlobalStyle } from "styled-components";

// const Logo = import("/img/logo_png.png");

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body, html {
        font-size: 16px;
        margin: 0;
        padding: 0;
        width: 100%;
        background: #fff;
        
        /* background:  linear-gradient(90deg, rgba(33,33,33,0.8) 100%, rgba(33,33,33,1) 100%), url("/img/logo_img.jpg"); */
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        
        color:#fff;


        @media only screen and (max-width: 768px) {
            font-size: 15px;
        }
        @media only screen and (max-width: 425px) {
            font-size: 14px;
        }
    } 

    
`;
