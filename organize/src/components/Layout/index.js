import React from 'react';
import SideBar from '../Sidebar';
import NavBar from '../NavBar';
import Footer from '../Footer';

import { MainPainel } from './styles';

const Layout = ({ children, title }) => (
    <div className="wrapper">
        <SideBar />
        <MainPainel>
            <NavBar title={title} />
            <div className="content">
                <div className="container-fluid">{children}</div>
            </div>
            <Footer />
        </MainPainel>
    </div>
);

export default Layout;
