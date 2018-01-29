import {connect, Dispatch} from "react-redux";
import * as actions from "../actions/navbar";
import {NavBar} from "../components/NavBar";

function mapStateToProps({navBar} : any, ownProps : any){
    return {
        isCollapsed : navBar.isCollapsed,
        children : ownProps.children
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.NavBarAction>){
    return {
        toggle: () => dispatch(actions.toggle()),
        // theFlight: () => dispatch(actions.theFlight()),
        // theIsland: () => dispatch(actions.theIsland()),
        // theFood: () => dispatch(actions.theFood()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);