import * as React from "react";
import {NavLink} from "react-router-dom";
import NavBar from "../components/NavBar";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import withStyles from "@material-ui/core/es/styles/withStyles";
import AccountIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {withTranslation} from "../../../../_helpers/WithTranslate";
import Badge from "@material-ui/core/es/Badge/Badge";

interface IProps{
    lang : any,
    logOut : () => void
    userName : string
    classes : any
    pagesToolBarIsOpen : boolean
}

const styles = {
    badge : {
        marginRight : 20
    }
}

const LoggedNavBar = ({lang,logOut, userName, classes} : IProps) => {
    return <NavBar>
        <Badge badgeContent={12} className={classes.badge} color="secondary">
            <NotificationsIcon/>
        </Badge>
        <Badge badgeContent={3} className={classes.badge} color="secondary">
            <MailIcon/>
        </Badge>
        <Avatar alt={userName}>
            <AccountIcon/>
        </Avatar>
        {/*<Nav className="mr-auto" navbar>*/}
            {/*<UncontrolledDropdown nav>*/}
                    {/*<DropdownToggle size="sm" nav caret>*/}
                        {/*{lang.training}*/}
                    {/*</DropdownToggle>*/}
                    {/*<DropdownMenu >*/}
                        {/*<DropdownItem >*/}
                            {/*<NavLink className="nav-link text-dark default" to="/training">{lang.training}</NavLink>*/}
                        {/*</DropdownItem>*/}
                        {/*<DropdownItem disabled>*/}
                            {/*<NavLink className="nav-link text-dark"  to="/history">{lang.history}</NavLink>*/}
                        {/*</DropdownItem>*/}
                        {/*<DropdownItem disabled>*/}
                            {/*<NavLink className="nav-link text-dark"  to="/plan">{lang.plan}</NavLink>*/}
                        {/*</DropdownItem>*/}
                        {/*<DropdownItem disabled>*/}
                            {/*<NavLink className="nav-link text-dark" to="/statistic">{lang.statistic}</NavLink>*/}
                        {/*</DropdownItem>*/}
                    {/*</DropdownMenu>*/}
                {/*</UncontrolledDropdown>*/}
            {/*</Button>*/}
        {/*</NavItem>*/}

            {/*<NavItem>*/}
                {/*/!*<Button color="default" className="p-0">*!/*/}
                {/*<NavLink className="nav-link" to="/challenges">{lang.challenges}</NavLink>*/}
                {/*/!*</Button>*!/*/}
            {/*</NavItem>*/}
            {/*<NavItem>*/}
                {/*/!*<Button color="default" className="p-0">*!/*/}
                {/*<NavLink className="nav-link" to="/roads">{lang.roads}</NavLink>*/}
                {/*/!*</Button>*!/*/}
            {/*</NavItem>*/}
        {/*</Nav>*/}
        {/*<Nav className="ml-auto" navbar>*/}
            {/*<NavItem>*/}
                {/*<NavLink className="nav-link" to={"/"} onClick={() => logOut()}>{lang.logout}</NavLink>*/}
            {/*</NavItem>*/}
        {/*</Nav>*/}
    </NavBar>

};

export default withStyles(styles)(withTranslation(LoggedNavBar))