import {connect, Dispatch} from "react-redux";
import {LoginModal} from "../components/LoginModal";
import * as actions from "../actions/LoginModalAction"

function mapStateToProps({loginModal, lang, session} : any){
    return {
        username : loginModal.username,
        password : loginModal.password,
        remember : loginModal.remember,
        isOpen: loginModal.isOpen,
        lang : lang.lang.loginForm,
        isLogged : session.isLogged
    }
}

function mapDispachToProps(dispatch : Dispatch<actions.LoginModalAction>){
    return {
        toggle : () => dispatch(actions.toggle()),
        logIn : (username : string, password : string, isLogged : boolean) => dispatch(actions.logIn(username, password, isLogged)),
    }
}

export default connect(mapStateToProps, mapDispachToProps)(LoginModal);