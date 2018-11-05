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
import Menu from "@material-ui/core/es/Menu/Menu";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

interface IProps{
    lang? : any,
    logOut : () => void
    userName : string
    classes : any
}

interface IState{
    anchorEl : any
}

const styles = {
    badge : {
        marginRight : 20
    }
}

@withTranslation()
class LoggedNavBar extends React.Component<IProps, IState>{

    constructor(props: any) {
        super(props);
        this.state = {
            anchorEl : null
        }
    }

    handleClick = (event : any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        let {lang, logOut, userName, classes} = this.props;
        const { anchorEl } = this.state;
        return <NavBar>
            <Badge badgeContent={12} className={classes.badge} color="secondary">
                <NotificationsIcon/>
            </Badge>
            <Badge badgeContent={3} className={classes.badge} color="secondary">
                <MailIcon/>
            </Badge>
            <Avatar alt={userName}>
                <AccountIcon onClick={this.handleClick}/>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem button={false}>{userName}</MenuItem>
                    <MenuItem onClick={this.handleClose}>{lang.myaccount}</MenuItem>
                    <MenuItem onClick={logOut}>{lang.signout}</MenuItem>
                </Menu>
            </Avatar>
        </NavBar>
    }

};

export default withStyles(styles)(LoggedNavBar)