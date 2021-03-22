import React, { Component } from 'react';
import UserService from '../services/UserService';

import {Container, Table, Button } from 'reactstrap';

class UserComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            isloaded:false,
            errmsg:''
        }
        this.retriveUsers = this.retriveUsers.bind(this);
        this.reloadUsers = this.reloadUsers.bind(this);
        this.removeUser = this.removeUser.bind(this);
        
    }

    componentDidMount(){
        
        this.retriveUsers();
    }

    retriveUsers(){
        UserService.retrieveAllUsers()
        .then(
            response => {
                console.log(response);
                this.setState({users:response.data, isloaded:true});
            }
        ).catch( err => {
            let errdesc='';
            // Got response
            if (err.response){
                errdesc = err.response;
            } else if (err.request){ 
                // No response
                errdesc = 'No response from the server';
            }else{
                // Others
                errdesc = err;
            }
            console.log("Unknown error :"+ err.toString());
            this.setState({users:[], isloaded:false, errmsg:errdesc});

        });
    }

    reloadUsers () {
               
        let newUsers = [
            {"username":"gpala","userEmailId":"gowrisankar.pala","userAddress":"Address 1 PRPeta","userDOB":"1989-04-30","userProfile":"ADMIN"},
            {"username":"asoni","userEmailId":"A.soni","userAddress":"Address 1 PRPeta","userDOB":"1989-04-30","userProfile":"ADMIN"},
            {"username":"pchawl","userEmailId":"piyush.ch@","userAddress":"Address 1 PRPeta","userDOB":"1989-04-30","userProfile":"ADMIN"}
        ];

        newUsers.map(eachUser => UserService.addUser(eachUser));

        this.retriveUsers();
    }

    removeUser(){
        
    }

    render(){

        if (this.state.isloaded ){
            return (

                <Container> 
                    <h3>User details </h3>                                                 
    
                    <Table bordered hovered >
                        <caption>Retrieved {this.state.users.length} users</caption>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Name</th>
                                <th>User email</th>
                                <th>User Address</th>
                                <th>User DOB</th>
                                <th>User Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user=>
                                        <tr key={user.uid}>
                                            <td>{user.uid}</td>
                                            <td>{user.username}</td>
                                            <td>{user.userEmailId}</td>
                                            <td>{user.userAddress}</td>
                                            <td>{user.userDOB}</td>
                                            <td>{user.userProfile}</td>
                                        </tr>
                                )    
    
                            }
                            
                        </tbody>
                    </Table>    
                    
                    
                
                    <div className="float-left">                        
                        <Button type="button" className="btn btn-success">Add</Button>
                        <Button type="button" className="btn btn-warning">Delete</Button>
                    </div>
                    <div className="float-right">                        
                        <Button type="button" className="btn btn-success" onClick={this.reloadUsers}>Reload</Button>
                        <Button type="button" className="btn btn-success">Save</Button>
                        </div>       
                    
                
                   
                </Container>

                
            );

        }else{
            return (
                <Container>
                  <h3>User details </h3>
                     
                 <div className="alert alert-info">
                 {(this.state.errmsg)?this.state.errmsg.toString() : 'Loading users from server. Please wait..'} 
                </div>
                </Container>
            );
        }

        
    }

}


export default UserComponent;