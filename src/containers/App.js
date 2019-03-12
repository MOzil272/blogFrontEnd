import {Route, Switch} from 'react-router-dom';
import React from 'react';
import * as PropTypes from 'prop-types';
import routes from '../constants/routes';
import Dashboard from '../layouts/Main';
import {hot} from 'react-hot-loader';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.element,
  };

  render() {
    return (

      <Switch>


        <Route path={routes.MAIN} component={Dashboard}/>


      </Switch>
    );
  }
}

export default hot(module)(App);

