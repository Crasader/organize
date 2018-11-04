import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyleSideBar = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 260px;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        content: '';
    }

    .sidebar-wrapper {
        position: relative;
        overflow: hidden;
        width: 260px;
        height: 100vh;
        box-shadow: inset -1px 0px 0px 0px #ddd;

        .logo {
            padding: 18px 0px;
            margin: 0 20px;
            text-transform: uppercase;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }

        .nav {
            margin-top: 20px;
        }
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: baseline;
    margin: 20px 0px;
    padding: 0 30px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;

    &.active {
        color: #663494;
    }

    i {
        flex: 1;
        font-size: 28px;
        margin-right: 10px;
    }

    p {
        flex: 8;
        position: relative;
        margin: 0;
        top: -5px;
    }

    &.bottom {
        position: absolute;
        bottom: 0;
    }
`;
