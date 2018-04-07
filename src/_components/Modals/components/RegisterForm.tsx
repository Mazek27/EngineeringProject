import * as React from "react";

// import * as actions from "../actions/RegisterModalAction";

interface IProps {
    username : string,
    password :  string,
    email : string,
    phoneNumber : string
    lang : any
}

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


// export const RegisterForm = ({username, password, email, phoneNumber, lang} : IProps) => {
//     let validResult = validate(password)
//     let valid = validate(password).every(item => item.valid == true);
//     return <Form>
//         {/*UserName*/}
//         <FormGroup>
//             <Input valid={username != ""} value={username} onChange={(e) => store.dispatch(actions.userNameChange(e))} type="email" placeholder={lang.password} className="m-1"/>
//         </FormGroup>
//         {/*Password*/}
//         <FormGroup>
//             <Input valid={valid}  value={password} onChange={(e) => store.dispatch(actions.passwordChange(e))} type="password"  placeholder={lang.password} className="m-1"/>
//             <FormFeedback>
//                 {validResult.map(item =>
//                     <p key={item.text} className={item.valid ? "text-success m-0" : "text-danger m-0"}>{item.text}</p>)}
//             </FormFeedback>
//         </FormGroup>
//         {/*Email*/}
//         <FormGroup>
//             <Input valid={email != ""}  value={email} onChange={(e) => store.dispatch(actions.emailChange(e))} type="password"  placeholder={lang.password} className="m-1"/>
//             <FormFeedback>
//                 {validResult.map(item =>
//                     <p key={item.text} className={item.valid ? "text-success m-0" : "text-danger m-0"}>{item.text}</p>)}
//             </FormFeedback>
//         </FormGroup>
//         {/*Phone Number*/}
//         <FormGroup>
//             <Input valid={phoneNumber != ""}  value={phoneNumber} onChange={(e) => store.dispatch(actions.passwordChange(e))} type="password"  placeholder={lang.password} className="m-1"/>
//             <FormFeedback>
//                 {validResult.map(item =>
//                     <p key={item.text} className={item.valid ? "text-success m-0" : "text-danger m-0"}>{item.text}</p>)}
//             </FormFeedback>
//         </FormGroup>
//         <FormGroup check>
//             <Label check>
//                 <Input value={remember ? 1 : 0} type="checkbox" color="green"/>
//                 Stay logged in
//             </Label>
//         </FormGroup>
//     </Form>
// }