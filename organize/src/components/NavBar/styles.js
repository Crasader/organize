import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavBar = styled.nav`
    background-color: #663494;
    color: #fff;

    .container-fluid {
        display: flex;
        align-items: baseline;
    }

    .navbar-brand {
        font-weight: 600;
        font-size: 20px;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: baseline;
    color: #fff;
    font-weight: 600;
    font-size: 13px;

    i {
        margin-right: 5px;
    }

    &:hover {
        color: #fff;
    }
`;
