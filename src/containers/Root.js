import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'connected-react-router';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import store, {history, persistor} from '../store';

export default class Root extends Component {

  render() {
    const {
      children,
    } = this.props;

    return (

      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <div>
              <CssBaseline/>
              {children}
            </div>
          </ConnectedRouter>
        </PersistGate>
      </ReduxProvider>
    );
  }

}
Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export {store, persistor};
