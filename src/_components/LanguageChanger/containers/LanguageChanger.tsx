import {connect} from "react-redux";
import {LanguageChanger} from "../components/LanguageChanger";
import * as actions from "../../LanguageChanger/actions/LanguageChangerAction";
import {Dispatch} from "redux";

function mapStateToProps({session} : any) {
    return {
        currentLang : session.currentLang
    }

}

function mapDispatchToProps(dispatch : Dispatch<actions.LanguageAction>){
    return {
        languageChange : (e : any) => dispatch(actions.languageChange(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChanger);
