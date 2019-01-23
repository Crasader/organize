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

    .table {
        background: #fff;
        border-radius: 3px;
        font-size: 13px;
        font-weight: bold;
        box-shadow: 0px 0px 8px #c1c1c1;

        tr {
            border-bottom: 1px solid #f2f2f2;

            td {
                border: none;
            }
        }

        tfoot {
            background: #f4f3f3;

            tr > td {
                border-top: 2px solid #cfcfcf;
            }
        }
    }

    .table-hover tbody tr:hover {
        background-color: rgba(0, 61, 151, 0.075);
    }

    .negative-circle {
        color: #d95a5a;
    }

    .positive-circle {
        color: #5ad95a;
    }
`;

export default GlobalStyle;
