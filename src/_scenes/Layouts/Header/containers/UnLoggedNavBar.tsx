import {connect, Dispatch} from "react-redux";
import * as actions from "../../../../_components/Modals/actions/LoginModalAction";
import {UnLoggedNavBar} from "../components/UnLoggedNavBar";
import {translator} from "../../../../_helpers/store";

function mapStateToProps({lang} :any) {
    return {
        lang : lang.lang.unloggedNavbar
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.LoginModalAction>){
    return {
        toggle: () => dispatch(actions.toggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnLoggedNavBar);