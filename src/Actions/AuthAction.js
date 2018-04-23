import axios from 'axios';
import { notify } from 'react-notify-toast';

const BASE_URL='http://localhost:5000'
const REGISTER ='register_user'
export const AUTHENTICATED = 'authenticate_user'

const Signup =(response)=>{
    return{
        'type': REGISTER,
        'payload': response.data.message
    }
}

const Login = (response)=>{
    return{
        'type':AUTHENTICATED,
        'payload':response.data.message
    }
}
export const SignupAction =(data)=>{
    return async (dispatch)=>{
        await axios.post(`${BASE_URL}/auth/register`, data)
        .then(response=>{
            dispatch(Signup(response));
            notify.show(response.data.message, 'success', 4000)
            window.location.assign('/login')
            console.log(response)

        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });        
    }
} 

export const LoginAction =(data)=>{
    return async (dispatch)=>{
        await axios.post(`${BASE_URL}/auth/login`, data)
        .then(response=>{
            dispatch(Login(response));
            localStorage.setItem('token', response.data.access_token)
            notify.show(response.data.message, 'success', 4000)
            window.location.assign('/dashboard')
            console.log(response)
        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.message, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });    
    }
}