import * as React from "react";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/es/Button/Button";
import {withTranslation} from "../../../../_helpers/WithTranslate"
import Modal from "@material-ui/core/es/Modal/Modal";
import LoginForm from "../../../../_components/Modals/components/LoginForm";
import withStyles from "@material-ui/core/es/styles/withStyles";

interface IProps {
    lang : any
    classes : any
}

interface IState{
    loginModalIsOpen : boolean,
    registerModalIsOpen : boolean
}

const styles = {}




class UnLoggedNavBar extends React.Component<IProps, IState> {
    constructor(props : any){
        super(props)
        this.state={
            loginModalIsOpen : false,
            registerModalIsOpen : false
        }
    }

    changeModalState(modalType : string){
        switch(modalType){
            case 'login' : {
                this.setState({loginModalIsOpen : !this.state['loginModalIsOpen']})
                break
            }
            case 'register' : {
                this.setState({registerModalIsOpen : !this.state['registerModalIsOpen']})
                break
            }
        }
    }

    render(){
        const {lang, classes} = this.props;
        return <NavBar>
            <Button color="inherit" onClick={(e) => this.changeModalState("login")}>{lang.signin}</Button>
            <Modal open={this.state.loginModalIsOpen || this.state.registerModalIsOpen} onClose={(event) => this.changeModalState('login')}>
                {this.state.loginModalIsOpen ? <LoginForm/> : <></>}
            </Modal>
            {/*<Nav className="ml-auto" navbar>*/}
            {/*<NavItem>*/}
            {/*<a className="nav-link" onClick={toggle} >{lang.signIn}</a>*/}
            {/*</NavItem>*/}
            {/*<LoginModal {...this.state}/>*/}
            {/*<NavItem>*/}
            {/*<NavLink className="nav-link" to="">{lang.signOut}</NavLink>*/}
            {/*</NavItem>*/}
            {/*</Nav>*/}
        </NavBar>
    }
}


export default withStyles(styles)(withTranslation(UnLoggedNavBar))
// export default Component
// export default <WithTranslate WrappedComponent={Component}/>