import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
html, body{
font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
-webkit-font-smoothing:antialised ;
-moz-osx-font-smoothing:grayscale;
background-color: black;
color: #333;



}
h1,h2,h3,h4,h5,h6,h7,p,button,img,svg,input,a,body,div{
    ::selection { 
    background: rgba( 255, 31, 31, 0.6 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    color: white; 
    }
}
`;
