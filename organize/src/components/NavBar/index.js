import React from 'react';

import { StyledNavBar, StyledLink } from './styles';

const NavBar = ({ title }) => (
    <StyledNavBar className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <span className="navbar-brand">{title}</span>
            </div>

            <ul className="nav navbar-nav navbar-right">
                <li>
                    <StyledLink to="">
                        <i className="fa fa-cog" />
                        <p>Configurações</p>
                    </StyledLink>
                </li>
            </ul>
        </div>
    </StyledNavBar>
);

export default NavBar;
