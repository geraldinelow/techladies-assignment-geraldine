import React, { Component } from 'react';
import {ListConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    state = {  }
    render() { 
        return ( 
            <ListConsumer>
                {(value)=>{
                   const {id,title,img,info} = value.detailList;
                   return (
                       <div className="container py-5">
                           {/*title*/}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                   <h1>{title}</h1>
                               </div>
                           </div>
                           {/*end title*/}
                           {/*list info*/}
                           <div className="row">
                             <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} className="img-fluid" alt="list" />
                            </div>
                            {/*list text*/}
                             <div className="col-10 mx-auto col-md-6 my-3 text-none">     
                              <h2 className="text-none.font-weight-bold mt-3 mb-0">{title}</h2>
                              <p className="text-none lead">{info}</p>
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
            </ListConsumer>
         );
    }
}
 
export default Details ;