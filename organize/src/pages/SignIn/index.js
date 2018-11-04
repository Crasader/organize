import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AuthActions } from '../../store/ducks/auth';
import { isAuthenticated } from '../../utils/auth';
import history from '../../utils/history';

import Alerts from '../../components/Alerts';
import Loading from '../../components/Loading';

import { ContainerBackground, ContainerLogin } from './styles';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        if (isAuthenticated()) {
            history.push('/dashboard');
        }
    }

    handleSignIn = (e) => {
        e.preventDefault();

        const { authorize } = this.props;
        const { email, password } = this.state;

        authorize(email, password);
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { email, password } = this.state;
        const { auth } = this.props;

        return (
            <div className="container-fluid">
                <div className="row">
                    <ContainerBackground className="col-lg-9">
                        <div className="background" />
                    </ContainerBackground>

                    <ContainerLogin className="col-lg-3">
                        <Alerts />

                        <h1 className="title">Login</h1>

                        <form onSubmit={this.handleSignIn}>
                            <div className="form-group">
                                <div className="col-lg-12">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        autoComplete="off"
                                        value={email}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-lg-12">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Senha"
                                        value={password}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-lg-12">
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-block button-login"
                                    >
                                        {auth.loading ? (
                                            <Loading
                                                type="bubbles"
                                                color="#fff"
                                                height={30}
                                                width={30}
                                                className="m-auto"
                                            />
                                        ) : (
                                            'Entrar'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </ContainerLogin>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);
