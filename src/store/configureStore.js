import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import rootReducer from "../reducers/";

let middlewares = [];

middlewares.push(thunkMiddleware);

const loggerMiddleware = createLogger();
middlewares.push(loggerMiddleware);

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
);

export default function configureStore(history, initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  )
}
