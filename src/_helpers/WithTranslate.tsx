import * as React from "react";
import * as ReactRedux  from "react-redux";

// export default function HOCBaseRender<Props, State, ComponentState>(
//     Comp: new()=> Component<Props & State, ComponentState>) {
//     return class HOCBase extends Component<Props, State>{
//         render(){
//             return <Comp {...this.props} {...this.state}/>
//         }
//     }
// }

/*******************************************/
export interface IWithTranslationProps{
    lang : any
}

type HOC<PWrapped, PHoc> = React.ComponentClass<PWrapped , PHoc> | React.SFC<PWrapped & PHoc>;

export function withTranslation<P, S>(Component: HOC<P & IWithTranslationProps,any>): React.ComponentClass<P, S>{
    class C extends React.Component<P & IWithTranslationProps, S> {
        public render(): JSX.Element{
            console.log(this.props);
            const {lang, ...rest} =this.props as any;

            return (
                <Component lang={lang[getDisplayName(Component)]} {...rest}/>
            )
        }
    }

    const mapStateToProps = (state: any, ownProps: P): IWithTranslationProps => ({
        lang: state.lang.lang
    });

    // @ts-ignore
    return ReactRedux.connect(mapStateToProps)(C);
}

// export default withTranslation
/*******************************************/

// export const WithTranslate = (WrappedComponent: ComponentType<any>) => {
//     // let {lang} = store.getState()
//     let componentName = getDisplayName(WrappedComponent);
//
//
//     return (
//         <LanguageContext.Consumer>
//             {
//                 (value : any)=> <WrappedComponent lang={languages[value.currentLanguage][componentName]}/>
//             }
//         </LanguageContext.Consumer>
//     )
//
// }
//
function getDisplayName(WrappedComponent : any){
    return (WrappedComponent.displayName || WrappedComponent.name).toLowerCase();
}
