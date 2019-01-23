import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';

import Loading from '../Loading';

import { StyleSideBar, StyledLink } from './styles';

const SideBar = ({ auth, logout }) => (
    <StyleSideBar>
        <div className="sidebar-wrapper">
            <div className="logo">Organize</div>

            <nav className="nav flex-column">
                <StyledLink className="nav-link active" to="dashboard">
                    <i className="fa fa-tachometer" />
                    <p>Dashboard</p>
                </StyledLink>

                <StyledLink className="nav-link" to="lancamentos">
                    <i className="fa fa-money" />
                    <p>Lançamentos</p>
                </StyledLink>
            </nav>

            <button
                disabled={auth.loading}
                type="button"
                className="btn btn-logout"
                onClick={() => logout()}
            >
                {auth.loading ? (
                    <Loading
                        type="bubbles"
                        color="#fff"
                        height={20}
                        width={20}
                        className="m-auto"
                    />
                ) : (
                    'SAIR'
                )}
            </button>
        </div>
    </StyleSideBar>
);

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideBar);
