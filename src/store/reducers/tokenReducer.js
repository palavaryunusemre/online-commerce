import { ADD_TO_TOKEN, REMOVE_FROM_TOKEN } from "../actions/tokenAction"
import { tokenItems } from "../initialValues/tokenItems"

const initialState = {
    tokenItems: tokenItems
}

function tokenReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_TOKEN:
            return {
                ...state,
                tokenItems: [...state.tokenItems, action.payload]
            };
        case REMOVE_FROM_TOKEN:
            return {
                ...state,
                tokenItems: state.tokenItems.filter(token => token !== action.payload)
            };
        default:
            return state;
    }
}

export default tokenReducer;
