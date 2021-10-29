import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import initState from './initStates'
import rootReducer from './reducers/rootReducer'
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk, sagaMiddleware),
)

sagaMiddleware.run(rootSaga)



export default store
