import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { keycloak } from './keycloak-config';

// react-md utilizes Google's material icons
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons'] } });

import App from './containers/App';
import configureStore from './store/configureStore';
import { addItem } from './actions/items';

import './assets/stylesheets/index.scss';

// the same history instance is required in the store and ConnectedRouter
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
const store = configureStore(history);

keycloak.init({ onLoad: 'check-sso', checkLoginIframeInterval: 1 }).success(authenticated => {
  if (keycloak.authenticated) {
    sessionStorage.setItem('kctoken', keycloak.token);

    //Updating some value in store to re-render the component
    store.dispatch(addItem('Welcome!'));
    
    setInterval(() => {
      keycloak.updateToken(10).error(() => keycloak.logout());
      sessionStorage.setItem('kctoken', keycloak.token);
    }, 10000);
    } else {
      keycloak.login();
    }
});

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

// In development, react hot loading updates the application when
// changes are made, but maintains the application state.
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  });
}
