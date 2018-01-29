import {connect, Dispatch} from "react-redux";
import * as actions from "../../../../_components/Modals/actions/LoginModalAction";
import {UnLoggedNavBar} from "../components/UnLoggedNavBar";
import {translator} from "../../../../_helpers/store";
import {LoggedNavBar} from "../components/LoggedNavBar";

function mapStateToProps({lang} :any) {
    return {
        lang : lang.lang.loggedNavbar
    }
}

function mapDispatchToProps(){
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedNavBar);