import * as React from "react";
import {withTranslation} from "../../../../_helpers/WithTranslate";
import {requestGet} from "../../../../_services/endpointConnection";
import ObjectTable from "../../../../_components/Table/ObjectTable";
import {Sports} from "../../../../_helpers/enums/sports.enum";
import "../../../../_helpers/fonts.css"

export interface IProps{
    lang : any
}

const style = (theme: any) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

@withTranslation()
export class HistoryPage extends React.Component<IProps, any> {
    constructor(props : IProps){
        super(props);

        this.state = {
            rows : []
        }
    }

    componentDidMount(){
        requestGet("trainings").then(response => {
            this.setState({
                rows : response.map((record: any) => {
                    return {
                        id : record.id,
                        type : <div className={`sport-ico ${Sports[record.type]}`}></div>,
                        date : record.trainingTime,
                        distance : record.detail.distance,
                        duration : record.detail.duration,
                    }

                })
            })
        })
    }


    render(){
        let {lang} = this.props;
        let {rows} = this.state;

        return <ObjectTable head={lang} body={rows}/>

        // return <Paper className={classes.root}>
        //     <Table className={classes.table}>
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>{lang.type}</TableCell>
        //                 <TableCell>{lang.date}</TableCell>
        //                 <TableCell numeric>{lang.distance}</TableCell>
        //                 <TableCell numeric>{lang.duration}</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {
        //                 rows.map((row: any) => (
        //                     <TableRow key={row.id}>
        //                         <TableCell component="th" scope="row">
        //                             {row.type}
        //                         </TableCell>
        //                         <TableCell>{row.trainingTime}</TableCell>
        //                         <TableCell>{row.detail.distance}</TableCell>
        //                         <TableCell>{row.detail.duration}</TableCell>
        //                     </TableRow>
        //                 ))
        //             }
        //         </TableBody>
        //     </Table>
        // </Paper>
    }

}