import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlertsActions } from '../../store/ducks/alerts';

const Alerts = ({ alerts: { type, message, visible }, hideAlert }) => visible && (
    <div className={`alert alert-${type}`} role="alert">
        <strong>{message}</strong>

        <button type="button" className="close" onClick={hideAlert}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);

const mapStateToProps = state => ({
    alerts: state.alerts,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlertsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Alerts);
