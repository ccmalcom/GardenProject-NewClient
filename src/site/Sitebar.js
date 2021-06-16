import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Nav, Navbar, NavLink, NavbarBrand } from 'reactstrap';
import Home from './Home.js';
import Logout from '../components/logout/Logout.js';
import styled from 'styled-components';

const Div = styled.div `
    align-content: left;
`


const Sitebar = (props) => {
    return(
        <div>
            <Nav>
                <Navbar className='sitebar'>
                    <Div>
                        <NavLink href="/" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                    </Div>
                    <Div>
                        <NavbarBrand href='/'>
                            <Logout clearSession={props.clearSession}/>
                        </NavbarBrand>
                    </Div>
                </Navbar>
            </Nav>
        </div>    
    );
};

export default Sitebar;