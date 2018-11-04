import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
        overflow: hidden;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Muli', sans-serif;
        background-color: #f4f3ef;
    }

    a {
        color: #66615B;
        opacity: .8;

        &:hover {
            text-decoration: none;
            color: #66615B;
            opacity: 1;
        }
    }

    button {
        cursor: pointer;
    }

    .form-control:focus {
        border-color: #cccccc;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .m-auto {
        margin: 0 auto;
    }
`;

export default GlobalStyle;
