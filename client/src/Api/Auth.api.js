import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export async function userSignUp(data){
    return axios.post(`${BASE_URL}/api/v1/auth/register`,data);
}

export async function userSignIn(data){
    return axios.post(`${BASE_URL}/api/v1/auth/login`,data);
}