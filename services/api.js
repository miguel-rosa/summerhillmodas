const PRODUCTION = true;
const API_URL = PRODUCTION ? "http://store-api-miguel.herokuapp.com/" : "http://localhost:1337";

export function STORE_GET(slug){
    return {
        url:API_URL +'/stores/'+ slug,
        options:{
            method:'GET'
        }
    }
}