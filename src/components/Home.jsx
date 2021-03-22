import React, {Component} from 'react';
import UserComponent from './UserComponent';
import Header from './Header'
export default class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header />
               
               <div id="homeCarousel" class="carousel slide" data-ride="carousel">
              
                   <div class="carousel-inner">
                        <div id="item1" class="carousel-item active">
                            <img class="d-block w-50" src="../../logo512.png" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../logo512.png" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../logo512.png" alt="Third slide"/>
                        </div>
                    </div>

               </div>

            </div>
        );
    }
}