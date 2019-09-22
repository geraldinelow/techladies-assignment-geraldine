import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class ContactMe extends Component {
    constructor(props) {
        super(props)
    
        this.state = { 
        id: 3,
        title: "How do you find me?",
        img: "https://i.ytimg.com/vi/Lcw5xknnzvc/maxresdefault.jpg",
        info: "Wonder where I am? Look for me via Linkedin (www.linkedin.com/in/geraldinelhy) or email (geraldinelhy@gmail.com)."
    }
     }

     render() { 
        return ( 
                   <div className="container py-5">
                       {/*title*/}
                       <div className="row">
                           <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                               <h1>{this.state.title}</h1>
                           </div>
                       </div>
                       {/*end title*/}
                       {/*list info*/}
                       <div className="row">
                         <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={this.state.img} className="img-fluid" alt="list" />
                        </div>
                        {/*list text*/}
                         <div className="col-10 mx-auto col-md-6 my-3 text-none">     
                          <h2 className="text-none.font-weight-bold mt-3 mb-0">{this.state.title}</h2>
                          <p className="text-none lead">{this.state.info}</p>
                          {/*buttons*/}
                          <div>
                            <Link to='/'>
                                <ButtonContainer homepage>
                                    Back to Homepage
                                </ButtonContainer>
                            </Link>
                          </div>
                         </div>
                       </div>
                   </div>
               )
            }}   
    

export default ContactMe; 