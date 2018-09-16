import * as React from "react";
import NavBar from "../containers/NavBar";
import Button from "@material-ui/core/es/Button/Button";
import {withTranslation} from "../../../../_helpers/WithTranslate"
import withStyles from "@material-ui/core/es/styles/withStyles";

interface IProps {
    lang : any
}



class UnLoggedNavBar extends React.Component<IProps, any> {
    constructor(props : any){
        super(props)
    }

    render(){
        return <NavBar>
            <Button color="inherit" style={{marginRight: '20px'}}>{this.props.lang.signIn}</Button>
            {/*<Nav className="ml-auto" navbar>*/}
            {/*<NavItem>*/}
            {/*<a className="nav-link" onClick={toggle} >{lang.signIn}</a>*/}
            {/*</NavItem>*/}
            {/*<LoginModal/>*/}
            {/*<NavItem>*/}
            {/*<NavLink className="nav-link" to="">{lang.signOut}</NavLink>*/}
            {/*</NavItem>*/}
            {/*</Nav>*/}
        </NavBar>
    }
}


export default withTranslation(UnLoggedNavBar)
// export default Component
// export default <WithTranslate WrappedComponent={Component}/>