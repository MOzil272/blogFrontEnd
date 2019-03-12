import {createStore, compose, applyMiddleware} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {persistStore} from 'redux-persist';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const history = createBrowserHistory();
const connectRouterHistory = connectRouter(history);

const middlewares = [
  thunk,
  routerMiddleware(history),
];

function configureStoreProd(initialState) {
  return createStore(
    connectRouterHistory(rootReducer),
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

function configureStoreDev(initialState) {

  const composeEnhancers = composeWithDevTools({
    maxAge: 100,
    // actionsBlacklist: [],
    // actionsWhitelist: [],
    predicate: (states, action) => !action.type.match(/^(@@|persist)/),
  }); // add
  return createStore(
    connectRouterHistory(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
}

const configureStore = process.env.NODE_ENV === 'production' ?
  configureStoreProd :
  configureStoreDev;

export default (initialState) => {
  const store = configureStore(initialState);
  const persistor = persistStore(store);
  // remvoe persistor;
  // persistor.purge();

  return {
    store,
    history,
    persistor,
  };
};
