import React, { Component } from 'react';
import Section from './Section';
import Title from './Title';
import {ListConsumer} from '../context';
import style from 'styled-components';
import {Link} from 'react-router-dom';

class SectionList extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                <Title name="Bootcamp" title="Assignment"/>
                <p className="col-10 mx-auto my-2 text-center text-title font-size:50px">Click on the pictures to find out more!</p>

                <div className="row">
                    <ListConsumer>
                        {value => {
                           return value.list.map(list =>{
                               return <Section key={list.id} list={list}/>;
                           } ) 
                        }
                        }
                    </ListConsumer>


                <ListWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <div className="img-container p-5">
                        <Link to= "/weatherapi">
                        <img src={'https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg'} alt="list" className="card-img-top"></img>
                    </Link>
                    
                </div>
                {/*card footer*/}
                <div className="card-footer d-flex justify-content-center">
                        <p className="text-center mb-0">
                            Weather Forecast
                        </p>
                    </div>
                    </div>
                </ListWrapper>
                </div>
                </div>
                </div>
            </React.Fragment>
         );
    }
}

const ListWrapper = style.div`
.card{
    border-color:transparent;
    transition:all 5s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
    font-size:30px;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.5);
}
`
 
export default SectionList;