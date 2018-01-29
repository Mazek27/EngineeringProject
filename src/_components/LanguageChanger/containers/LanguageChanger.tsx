import {connect, Dispatch} from "react-redux";
import {LanguageChanger} from "../components/LanguageChanger";
import * as actions from "../../LanguageChanger/actions/LanguageChangerAction";

function mapStateToProps() {
    return {
        currentLang : JSON.parse(localStorage.getItem("user")).locale
    }

}

function mapDispatchToProps(dispatch : Dispatch<actions.LanguageAction>){
    return {
        languageChange : (e : any) => dispatch(actions.languageChange(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChanger);
