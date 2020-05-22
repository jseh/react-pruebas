import reducerPrincipal from './ReducerPrincipal'
import { combineReducers } from "redux";

const allReducers = combineReducers({
    main: reducerPrincipal
})

export default allReducers;