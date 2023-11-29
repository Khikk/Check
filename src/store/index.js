import {combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { itemReducer } from './itemReducer'


const rootReducer = combineReducers({
    item: itemReducer
})

export const store = createStore(rootReducer)