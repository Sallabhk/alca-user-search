import createUserReducer from "./createUser";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    createUser : createUserReducer
})

export default rootReducer;