import * as React from "react";
import {withTranslation} from "../../../_helpers/WithTranslate";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Typography from "@material-ui/core/es/Typography/Typography";
import "./style.scss"
import TextField from "@material-ui/core/es/TextField/TextField";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";
import Button from "@material-ui/core/es/Button/Button";
import {Dispatch} from "redux";
import * as actions from "../actions/LoginFormAction";
import {connect} from "react-redux";

interface IProps {
    lang : any
    classes : any
    authenticate: (login : string, pass : string) => void
}

const styles = (theme : any)=> ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },

    bottom: {
        flexGrow: 1,
    }
});

@withTranslation()
export class LoginForm  extends React.Component<IProps, any>  {
    state = {
        login: "",
        password: "",
        remember: ""
    }

    handleChange = (name :string) => (event : any)=> {
        this.setState({
            [name]: event.target.value
        })
    }

    render(){
        let {lang, classes, authenticate} = this.props;
        return (
            <div className={classes.paper} id={'modal'}>
                <Typography variant="title" id="modal-title">
                    {lang.header}
                </Typography>
                <FormGroup row={false}>
                    <TextField
                        id="outlined-name"
                        label={lang.username}
                        className={classes.textField}
                        value={this.state.login}
                        onChange={this.handleChange('login')}
                        margin="normal"
                    />
                    <TextField
                        id="outlined-name"
                        label={lang.password}
                        className={classes.textField}
                        type={"password"}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                    <FormGroup row={true}>
                        <FormControlLabel className={classes.bottom}
                            control={<Checkbox checked={this.state.remember} onChange={this.handleChange('remember')}/>}
                            label={lang.remember}
                        />
                        <Button size={"small"} onClick={() => authenticate(this.state.login, this.state.password)}>{lang.action.login}</Button>
                    </FormGroup>
                </FormGroup>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch : Dispatch<actions.LoginFormAction>){
    return {
        authenticate : (login : string, pass : string) => dispatch(actions.getAuthenticate(login, pass))
    }
}
//@ts-ignore
export default connect(null,mapDispatchToProps)(withStyles(styles)(LoginForm))