import React from 'react';
import { StyleSideBar, StyledLink } from './styles';

const SideBar = () => (
    <StyleSideBar>
        <div className="sidebar-wrapper">
            <div className="logo">Organize</div>

            <nav className="nav flex-column">
                <StyledLink className="nav-link active" to="">
                    <i className="fa fa-tachometer" />
                    <p>Dashboard</p>
                </StyledLink>

                <StyledLink className="nav-link" to="">
                    <i className="fa fa-money" />
                    <p>Lançamentos</p>
                </StyledLink>

                <StyledLink className="nav-link bottom" to="">
                    <i className="fa fa-sign-out" />
                    <p>Sair</p>
                </StyledLink>
            </nav>
        </div>
    </StyleSideBar>
);

export default SideBar;
