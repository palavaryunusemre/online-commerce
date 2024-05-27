import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("products/getAll")
    }
    getByProductName(productName){
        return axios.get("getByProductName?productName="+productName)
    }
}