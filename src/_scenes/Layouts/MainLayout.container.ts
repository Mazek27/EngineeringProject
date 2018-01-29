import {MainLayout} from "./MainLayout";
import {connect} from "react-redux";

function mapStateToProps({session } : any, ownProps : any){
    return {
        isLogged : session.isLogged,
        children : ownProps.children
    }
}

function mapDispatchToProps(){

}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);