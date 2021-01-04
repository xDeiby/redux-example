import { applyMiddleware, compose, createStore, Store } from "redux";
import rootReducer from './ducks/rootReducer';
import { IUserState } from "./ducks/users/types";
import createSagaMiddelware from "redux-saga";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
    users : IUserState
}

// Redux DevTools

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 

const sagaMiddleware = createSagaMiddelware();

const store : Store<ApplicationState> = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run( rootSaga );

export default store;