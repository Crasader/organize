import styled from 'styled-components';
import Background from '../../assets/images/background-login.jpg';

export const ContainerBackground = styled.div`
    padding: 0;

    > .background {
        background: url(${Background});
        background-size: cover;
        min-height: 100vh;
    }

    @media (max-width: 991px) {
        display: none;
    }
`;

export const ContainerLogin = styled.div`
    padding: 110px 10px 0 10px;

    > .title {
        margin: 0 0 10px 15px;
        color: #663494;
    }

    .button-login {
        background-color: #663494;
        color: #fff;
        padding: 5px;
        opacity: 0.8;

        &:hover {
            opacity: 1;
            transition: 0.5s;
        }
    }
`;
