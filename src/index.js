import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './containers/Root';
import App from './containers/App';

render(
  <AppContainer>
    <Root>
      <App/>
    </Root>
  </AppContainer>,
  document.getElementById('app'),
);
