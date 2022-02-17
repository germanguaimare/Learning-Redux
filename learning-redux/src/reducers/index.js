import counter from "./counter"
import logged from "./logged"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    counter: counter,
    logged: logged
})

export default allReducers