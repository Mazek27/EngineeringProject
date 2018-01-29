import * as React from "react";
import Button from "reactstrap/lib/Button";
import ModalFooter from "reactstrap/lib/ModalFooter";
import ModalBody from "reactstrap/lib/ModalBody";
import ModalHeader from "reactstrap/lib/ModalHeader";
import Modal from "reactstrap/lib/Modal";
import {LoginForm} from "./LoginForm.";

interface IProps{
    username : string
    password : string
    remember : boolean
    isOpen : boolean
    toggle : () => void;
    logIn : (username : string, password : string, isLogged : boolean) => void,
    lang : any,
    isLogged : boolean
}

export const LoginModal = ({username, password, remember, isOpen, toggle, logIn, lang, isLogged} : IProps) => {
    return <Modal isOpen={isOpen}>
        <ModalHeader toggle={toggle}>{lang.header}</ModalHeader>
        <ModalBody>
            <LoginForm lang={lang} username={username} password={password} remember={remember}/>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={(e) => logIn(username, password, isLogged)}>{lang.action.login}</Button>{' '}
            <Button color="secondary" onClick={toggle}>{lang.action.cancel}</Button>
        </ModalFooter>
    </Modal>
};