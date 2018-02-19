import {connect} from "react-redux";
import {LoggedNavBar} from "../components/LoggedNavBar";

function mapStateToProps({lang} :any) {
    return {
        lang : lang.lang.loggedNavbar
    }
}

function mapDispatchToProps(){
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedNavBar);