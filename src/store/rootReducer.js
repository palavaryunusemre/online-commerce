// tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import tokenReducer from "./reducers/tokenReducer"

const rootReducer = combineReducers({
    cart: cartReducer,
    token: tokenReducer
})

export default rootReducer;