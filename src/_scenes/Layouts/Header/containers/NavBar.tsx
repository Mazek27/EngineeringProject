import {connect} from "react-redux";
import {NavBar} from "../components/NavBar";
import {Dispatch} from "redux";

function mapStateToProps({navBar} : any, ownProps : any){
    return {
        children : ownProps.children
    }
}

// function mapDispatchToProps(dispatch : Dispatch<actions.NavBarAction>){
//     return {
//         // theFlight: () => dispatch(actions.theFlight()),
//         // theIsland: () => dispatch(actions.theIsland()),
//         // theFood: () => dispatch(actions.theFood()),
//     }
// }

export default connect(mapStateToProps, /*mapDispatchToProps*/)(NavBar);