import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import styled from 'styled-components';

const ButtonA = styled.button`
    background-color: grey;
    width: 200px;
    height: auto;
    padding: 10px;
    border-radius: 20px;
    font-family: 'Nunito';
    font-size: 20px;
    border-style: solid;
    color: white;
    letter-spacing: 1px;
    &:hover{
        background-color: #6C6C6C;
        border-color: #6C6C6C;
    }
`

const Auth = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
    }
    const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
    }

    return(

    <div className='Box'>
        
        <ButtonA id='start' onClick={toggle}>Start Planting!</ButtonA>
        
        <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <Login updateToken={props.updateToken} />
        <br />
        <Button onClick={toggleNested}>Register Now!</Button>
        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Register now to start your garden!</ModalHeader>
            <ModalBody>
            <Register updateToken={props.updateToken} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggleNested}>Already have an account? Back to Login</Button>
            </ModalFooter>
            </Modal>
        </ModalBody>
        </Modal>
    </div>
    )
}

export default Auth;