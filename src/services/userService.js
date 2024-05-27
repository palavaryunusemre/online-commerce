import axios from "../api/axios"

export default class userService {
    userAdd(user,headers) {
        return axios.post("users/add",user,{headers})
    }
    logIn(user) {
        return axios.post("users/login",user,{ headers: { 'Content-Type': 'application/json' } })
    }
}
