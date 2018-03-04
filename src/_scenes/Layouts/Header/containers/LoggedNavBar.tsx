import {connect, Dispatch} from "react-redux";
import {LoggedNavBar} from "../components/LoggedNavBar";
import * as actions from "../../../../_helpers/session.action"

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