import {connect} from "react-redux";
import {LoggedNavBar} from "../components/LoggedNavBar";
import * as actions from "../../../../_services/session/session.action"
import {Dispatch} from "redux";

function mapStateToProps({lang} :any) {
    return {
        lang : lang.lang.loggedNavbar
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.SessionAction>){
    return {
        logOut: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedNavBar);