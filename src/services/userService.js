import axios from "axios";

export default class userService {
    userAdd(user) {
        return axios.post("http://localhost:8080/api/users/add",user)
    }
}
