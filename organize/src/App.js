import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyle from './styles/GlobalStyle';

import Routes from './routes';

import { store, persistor } from './store';
import history from './utils/history';

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle />

            <Router history={history}>
                <Routes />
            </Router>
        </PersistGate>
    </Provider>
);

export default App;
