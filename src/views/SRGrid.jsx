import React, {Component} from 'react';

import {Container, Table, Button } from 'reactstrap';


export default class SRGrid{
    
    constructor(props){
        super(props);
        this.state = {
            datagrid:[],
            datalength:0,
            datacols:[],
            tableLoaded:false,
            addRow: this.addRow.bind(this),
            deleteRow: this.deleteRow.bind(this),
            updateRow: this.updateRow.bind(this),
            getData: this.getData.bind(this)            
        }

        if (props.datagrid ) this.state.datagrid = props.datagrid;
        if (props.datacols ) this.state.datacols = props.datacols;

    }

    //Other  functions 
    addRow(){

    }

    render(){

        return(
            <Container> 
    
                    <Table bordered >
                        <caption>Displaying {this.state.datagrid.length} records</caption>
                        <thead>
                            <tr>
                                {this.state.datacols.map(colobj=>{
                                    <th>{colobj.name}</th>
                                })}

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.datagrid.map(
                                    trow=>{
                                        <tr>
                                        this.state.datacols.map(colobj=>{
                                            <td>{trow.colobj}</td>                                        
                                        }
                                        </tr>
                                    }
                                        
                                )    
    
                            }
                            
                        </tbody>
                    </Table>    
                    
                    
                
                    <div className="float-right">
                        
                        <Button type="button" className="btn btn-success">Add</Button>
                        <Button type="button" className="btn btn-warning">Delete</Button>
                    </div>       
                    
                     
                   
                </Container>
        );
    }
}