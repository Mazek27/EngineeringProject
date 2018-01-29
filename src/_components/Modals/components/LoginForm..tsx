import Form from "reactstrap/lib/Form";
import * as React from "react";
import Input from "reactstrap/lib/Input";
import {store} from "../../../_helpers/store";
import * as actions from "../actions/LoginModalAction";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import FormFeedback from "reactstrap/lib/FormFeedback";

interface IProps {
    username : string,
    password :  string,
    remember : boolean,
    lang : any
}


export const LoginForm = ({username, password, remember, lang} : IProps) => {
    // let validResult = validate(password)
    // let valid = validate(password).every(item => item.valid == true);
    return <Form>
        <FormGroup>
            <Input valid={username != ""} value={username} onChange={(e) => store.dispatch(actions.userNameChange(e))} type="email" placeholder={lang.username} className="m-1"/>
            <FormFeedback>
                <p>{lang.feedback.username}</p>
            </FormFeedback>
        </FormGroup>
        <FormGroup>
        <Input valid={password != ""}  value={password} onChange={(e) => store.dispatch(actions.passwordChange(e))} type="password"  placeholder={lang.password} className="m-1"/>
            <FormFeedback>
                <p>{lang.feedback.password}</p>
            </FormFeedback>
        </FormGroup>
        <FormGroup check>
            <Label check>
            <Input value={remember ? 1 : 0} type="checkbox" color="green"/>
                Stay logged in
            </Label>
        </FormGroup>
    </Form>
}