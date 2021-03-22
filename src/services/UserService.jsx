import axios_ from 'axios'
import {getEnv, getAuth} from '../serverconfig'

axios_.defaults.baseURL = getEnv().api_uri;

const headersAuth = {  username:'admin',  password:'nosecret'};

class UserService {   

    retrieveAllUsers(){        
        return axios_.get('/users', {auth: headersAuth} ,{
            
        
        });
    }

    addUser(userObj){
        return axios_.post('/users', userObj, {auth: headersAuth});
    }

}

export default new UserService()