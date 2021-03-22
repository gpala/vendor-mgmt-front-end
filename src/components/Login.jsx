import React, {Component} from 'react';
import Header from './Header'
import UserComponent from './UserComponent'
export default class Login extends Component{

    constructor(props){
        super(props);
        
    }

    
    render(){
        return(
            <div class="h-100">
                <Header/>
                <div class="container bg-info rounded m-3">
                    <div class="d-flex justify-content-center mt-3"><h2> Login </h2></div>
                    <div class="d-block w-70 p-4 mt-2 h-100">
                        <form>
                            <div class="form-group row">
                                <label class="col-sm-2 text-white" for="user_name"><h6>User ID</h6></label>
                                <div class="col-sm-6">
                                    <input class="form-control" type="text" id="user_name" placeholder="Enter user id"></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 text-white" for="user_pwd"><h6>Password</h6></label>
                                <div class="col-sm-6">
                                    <input class="form-control" type="password" id="user_pwd" placeholder="Enter password"></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-2"></div>
                                <btn class="ml-10 btn btn-primary col-sm-4 flex-center" onClick="/">Login</btn>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}