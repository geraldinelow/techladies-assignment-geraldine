import React, { Component } from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';
import {ListConsumer} from '../context';
import PropTypes from 'prop-types';

class Section extends Component {
    state = { 
     }
    render() { 
        const {id, title, img, info} = this.props.list;
        return ( 
            <ListWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ListConsumer>
                        {value=> (
                        <div className="img-container p-5" 
                        onClick={()=> value.handleDetail(id)
                    }>
                    <Link to= "/details">
                        <img src={img} alt="list" className="card-img-top"></img>
                    </Link>
                    </div>)}
                    
                    </ListConsumer>

                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-center">
                        <p className="text-center mb-0">
                            {title}
                        </p>
                    </div>
                </div>

            </ListWrapper>
         );
    }
}


Section.propTypes = {
        list:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
    }).isRequired
};

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
 
export default Section;