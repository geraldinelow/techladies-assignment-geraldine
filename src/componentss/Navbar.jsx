import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <NavWrapper className ="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src='http://www.techladies.co/assets/techladies-89cf109e931e6ec8b468f8cf60b804e69017457e46ffd01788820f9fc1005f31.png' alt="homepage" className="navbar-brand" width={200} height={50} />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                    <Link to ="/" className="nav-link">
                        Preparation for Bootcamp!
                    </Link>
                    </li>
                </ul>
                <Link to ='/details' className='ml-auto float:right'>
                    <ButtonContainer>
                        <span className="mr-0">
                        <i className="fas fa-phone-plus" />
                        </span>
                        About me!
                    </ButtonContainer>
                </Link>
                <Link to ='/ContactMe' className='ml-auto'>
                    <ButtonContainer>
                        <span className="mr-0">
                        <i className="fas fa-phone-plus" />
                        </span>
                        Contact me!
                    </ButtonContainer>
                </Link>
            </NavWrapper>
         );
    }
}

const NavWrapper = styled.nav`
background: var(--black);
.nav-link{
    color: var(--white)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

export default Navbar;