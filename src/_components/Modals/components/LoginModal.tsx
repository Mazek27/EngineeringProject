import * as React from "react";
import {LoginForm} from "./LoginForm.";
import Modal from "@material-ui/core/es/Modal/Modal";

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
    return <Modal open={isOpen}>
        {/*<ModalHeader toggle={toggle}>{lang.header}</ModalHeader>*/}
        {/*<ModalBody>*/}
            {/*<LoginForm lang={lang} username={username} password={password} remember={remember}/>*/}
        {/*</ModalBody>*/}
        {/*<ModalFooter>*/}
            {/*<Button color="primary" onClick={(e) => logIn(username, password, isLogged)}>{lang.action.login}</Button>{' '}*/}
            {/*<Button color="secondary" onClick={toggle}>{lang.action.cancel}</Button>*/}
        {/*</ModalFooter>*/}
    </Modal>
};