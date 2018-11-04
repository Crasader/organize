import React from 'react';

import { StyledFooter } from './styles';

const Footer = () => (
    <StyledFooter className="footer">
        <div className="container-fluid">
            <div className="copyright pull-right">
                © 2018, feito com <i className="fa fa-heart heart" /> por{' '}
                <a href="https://github.com/rafaelzorn">Rafael Zorn</a>
            </div>

            <div className="clearfix" />
        </div>
    </StyledFooter>
);

export default Footer;
