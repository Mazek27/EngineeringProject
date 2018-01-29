import * as React from "react";
import Modal from "reactstrap/lib/Modal";
import ModalHeader from "reactstrap/lib/ModalHeader";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalFooter from "reactstrap/lib/ModalFooter";
import Button from "reactstrap/lib/Button";
// import {RegisterForm} from "./RegisterForm";

interface IProps{
    username : string
    password : string
    remember : boolean
    isOpen : boolean
    toggle : () => void;
    logIn : (username : string, password : string) => void,
    lang : any
}

export const RegisterModal = ({username, password, remember, isOpen, toggle, logIn, lang} : IProps) => {
    return <Modal isOpen={isOpen}>
        <ModalHeader toggle={toggle}>{lang.header}</ModalHeader>
        <ModalBody>
            {/*<RegisterForm lang={lang} username={username} password={password} remember={remember}/>*/}
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={(e) => logIn(username, password)}>{lang.action.login}</Button>{' '}
            <Button color="secondary" onClick={toggle}>{lang.action.cancel}</Button>
        </ModalFooter>
    </Modal>
};