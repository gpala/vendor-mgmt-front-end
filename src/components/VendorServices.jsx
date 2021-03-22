import React, {Component} from 'react';
import Header from './Header';

import {Container, Table, Button } from 'reactstrap';


export default class Vendor extends Component{

    constructor(props){
        super(props);
        this.state = {
            vendors:[]          ,
            selectedVendorId:null  
        };
        this.selectVendor = this.selectVendor.bind(this);
    }

    componentDidMount(){
        let listVendors = [
            {vendor_id:1000, vendor_name:'Beverages' },
            {vendor_id:2000, vendor_name:'Dry Package Food'},
            {vendor_id:3000, vendor_name:'Dry Package Food 2'},
            {vendor_id:4000, vendor_name:'Dry Package Food 3'},
            {vendor_id:5000, vendor_name:'Dry Package Food 4'},
            {vendor_id:6000, vendor_name:'Dry Package Food 5'},
            {vendor_id:7000, vendor_name:'Dry Package Food 6'},
            {vendor_id:8000, vendor_name:'Dry Package Food 7'}
        ];
        
        this.setState( {vendors : listVendors });
    }

    selectVendor(selectedValue){
        this.setState({selectedVendorId:selectedValue});
    }

    render(){
        return(
            <div>
                <Header/>    
                <Container>
                    <div class="d-flex bg-info text-white justify-content-center">
                        <div class="p-2 m-1">
                         List Vendors
                        </div>                        

                    </div>
                    
                    <div class="d-flex p-3 m-1 alert alert-primary" role="alert">
                        Selected Vendor : {this.state.selectedVendorId}
                        <span class="float-right"><btn class="btn btn-primary"> Details</btn></span>
                    </div> 
                    
                    <div class="d-flex float-left">
                            {
                                this.state.vendors.map(eachVendor => 
                                    
                                    <div class=
                                        {eachVendor.vendor_id == this.state.selectedVendorId? 
                                            "bg-primary text-white m-1 p-4 w-50 h-50 border": 
                                            "bg-light m-1 p-4 w-50 h-25 border"} 
                                            onClick={()=>this.selectVendor(eachVendor.vendor_id)}>
                                        <h2>{eachVendor.vendor_id}</h2>
                                        <p class="text-sm-left">{eachVendor.vendor_name}</p>
                                        
                                    </div>)
                                
                            }
                    </div>
                    
                </Container>
                
            </div>
        );
    }
}