import configureStore from './configureStore';

const {
  store,
  history,
  persistor,
} = configureStore();

export default store;
export {history, persistor, configureStore};
