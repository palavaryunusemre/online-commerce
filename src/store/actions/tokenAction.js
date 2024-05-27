export const ADD_TO_TOKEN = "ADD_TO_TOKEN"
export const REMOVE_FROM_TOKEN = "REMOVE_FROM_TOKEN"

export function addToken(token){
    return{
        type : ADD_TO_TOKEN,
        payload : token
    }
}
export function removeFromToken(token){
    return{
        type : REMOVE_FROM_TOKEN,
        payload : token
    }
}