import * as React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";
import TextField from "@material-ui/core/es/TextField/TextField";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {withTranslation} from "../../../_helpers/WithTranslate";

// import * as actions from "../actions/RegisterModalAction";

interface IProps {
    classes : any
    lang : any
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

function validate(password : string){
    return [
        {
            valid : /^(?=.*[\x21-\x2F]).+$/.test(password),
            text : `Contain at least 1 sybmols of  ! " # $ % & ' ( ) + , . - /`
        },
        {
            valid : /^(?=.*\d).+$/.test(password),
            text : `Contain at least 1 number`
        },
        {
            valid : /^(?=.*[a-z]).+$/.test(password),
            text : `Contain at least 1 lowercase character (a-z)`
        },
        {
            valid : /^(?=.*[A-Z]).+$/.test(password),
            text : `Contain at least 1 uppercase character (A-Z)`
        },
        {
            valid : password.length >= 8,
            text : `Contain at least 8 characters`
        },
    ];
}


class RegisterForm extends React.Component<IProps, any> {

    username : any;
    mail : any;
    password : any;
    repeatPassword : any;
    phoneNumber : any;


    render(){
        let {classes, lang} = this.props;
        return <div className={classes.paper} id={'modal'}>
            <Typography variant="title" id="modal-title">
                {lang.header}
            </Typography>
            {/*UserName*/}
            <FormGroup row={false}>
                <TextField
                    id="outlined-name"
                    label={lang.username}
                    className={classes.textField}
                    innerRef={instance => {this.username = instance}}
                    // value={this.state.login}
                    // onChange={this.handleChange('login')}
                    margin="normal"
                />
                <TextField
                    id="outlined-name"
                    label={lang.mail}
                    className={classes.textField}
                    innerRef={instance => {this.mail = instance}}
                    // value={this.state.login}
                    // onChange={this.handleChange('login')}
                    margin="normal"
                />
                <TextField
                    id="outlined-name"
                    label={lang.password}
                    className={classes.textField}
                    innerRef={instance => {this.password = instance}}
                    // value={this.state.login}
                    // onChange={this.handleChange('login')}
                    margin="normal"
                />
                <TextField
                    id="outlined-name"
                    label={lang.repeatPassword}
                    className={classes.textField}
                    innerRef={instance => {this.repeatPassword = instance}}
                    // value={this.state.login}
                    // onChange={this.handleChange('login')}
                    margin="normal"
                />
                <TextField
                    id="outlined-name"
                    label={lang.phoneNumber}
                    className={classes.textField}
                    innerRef={instance => {this.phoneNumber = instance}}
                    // value={this.state.password}
                    // onChange={this.handleChange('login')}
                    margin="normal"
                />
            </FormGroup>
                {/*<TextField valid={username != ""} value={username} onChange={(e) => store.dispatch(actions.userNameChange(e))} type="email" placeholder={lang.password} className="m-1"/>*/}
            {/*</FormGroup>*/}
            {/*/!*Password*!/*/}
            {/*<FormGroup>*/}
                {/*/!*<Input valid={valid}  value={password} onChange={(e) => store.dispatch(actions.passwordChange(e))} type="password"  placeholder={lang.password} className="m-1"/>*!/*/}
                {/*/!*<FormFeedback>*!/*/}
                    {/*/!*{validResult.map(item =>*!/*/}
                        {/*/!*<p key={item.text} className={item.valid ? "text-success m-0" : "text-danger m-0"}>{item.text}</p>)}*!/*/}
                {/*/!*</FormFeedback>*!/*/}
            {/*</FormGroup>*/}
            {/*/!*Email*!/*/}
            {/*<FormGroup>*/}
                {/*/!*<Input valid={email != ""}  value={email} onChange={(e) => store.dispatch(actions.emailChange(e))} type="password"  placeholder={lang.password} className="m-1"/>*!/*/}
                {/*/!*<FormFeedback>*!/*/}
                    {/*/!*{validResult.map(item =>*!/*/}
                        {/*/!*<p key={item.text} className={item.valid ? "text-success m-0" : "text-danger m-0"}>{item.text}</p>)}*!/*/}
                {/*/!*</FormFeedback>*!/*/}
            {/*</FormGroup>*/}
            {/*/!*Phone Number*!/*/}
            {/*<FormGroup>*/}
                {/*/!*<Input valid={phoneNumber != ""}  value={phoneNumber} onChange={(e) => store.dispatch(actions.passwordChange(e))} type="password"  placeholder={lang.password} className="m-1"/>*!/*/}
                {/*/!*<FormFeedback>*!/*/}
                    {/*/!*{validResult.map(item =>*!/*/}
                        {/*/!*<p key={item.text} className={item.valid ? "text-success m-0" : "text-danger m-0"}>{item.text}</p>)}*!/*/}
                {/*/!*</FormFeedback>*!/*/}
            {/*</FormGroup>*/}
            {/*<FormGroup>*/}
                {/*/!*<Label check>*!/*/}
                    {/*/!*<Input value={remember ? 1 : 0} type="checkbox" color="green"/>*!/*/}
                    {/*/!*Stay logged in*!/*/}
                {/*/!*</Label>*!/*/}
            {/*</FormGroup>*/}
        </div>
    }
    // let validResult = validate(password)
    // let valid = validate(password).every(item => item.valid == true);

}
//@ts-ignore
export default withStyles(styles)(withTranslation(RegisterForm))