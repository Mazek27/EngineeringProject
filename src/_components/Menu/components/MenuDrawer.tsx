import Drawer from "@material-ui/core/es/Drawer/Drawer";
import * as React from "react";
import {connect} from "react-redux";
import {withTranslation} from "../../../_helpers/WithTranslate";
import {Dispatch} from "redux";
import * as actions from "../actions/MenuDrawerActions";
import {NavLink} from "react-router-dom";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Divider from "@material-ui/core/es/Divider/Divider";
import "./style.scss"


interface IProps{
    lang?: any
    pagesToolBarIsOpen : boolean
    handleDrawerClose : () => void
}

class MenuDrawer extends React.Component<IProps, any>{
    render() {
        let {lang, handleDrawerClose, pagesToolBarIsOpen} = this.props;
        const sites = [
            'home',
            '-',
            'training',
            'history',
            'plan',
            'statistic',
            '-',
            'challenges',
            'roads'
        ]
        const siteComponents = sites.map((value, index) => {
            if(value == "-"){
                return <Divider/>
            }
            return (
                <ListItem button key={index}>
                    <NavLink to={`/${value}`}>
                        <ListItemText primary={lang[value]}/>
                    </NavLink>
                </ListItem>
            )
        })

        return (
            <Drawer open={pagesToolBarIsOpen} onClose={handleDrawerClose}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <div style={{width: '200px'}}>
                        <List>{siteComponents}</List>
                    </div>
                </div>
            </Drawer>
        )
    }

}

function mapStateToProps({menuDrawer} : any){
    return {
        pagesToolBarIsOpen : menuDrawer.isOpen
    }
}

function mapDispachToProps(dispatch : Dispatch<actions.MenuDrawerActions>){
    return {
        handleDrawerClose : () => dispatch(actions.handleMenuDrawer())
    }
}
//@ts-ignore
export default connect(mapStateToProps, mapDispachToProps)(withTranslation(MenuDrawer))
