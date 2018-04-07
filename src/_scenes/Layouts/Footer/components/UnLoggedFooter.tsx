import * as React from "react";
import LanguageChanger from "../../../../_components/LanguageChanger/containers/LanguageChanger";

const cssFooter ={
    // position: "absolute",
    "bottom": "0",
    "width": "100%",
    "height": "60px",
    // "-height": "60px",
   "backgroudColor": "#f5f5f5"
}

export class UnLoggedFooter extends React.Component {
    render(){
        return <footer style={cssFooter}>
            <LanguageChanger/>
        </footer>
    }
}