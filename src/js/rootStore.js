import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer';

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(promise)));

export default rootStore;
