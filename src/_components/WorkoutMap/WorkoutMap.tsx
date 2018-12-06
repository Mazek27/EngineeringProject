import * as React from "react";
import {Map as LeafletMap, Polyline, TileLayer} from "react-leaflet";
import {LatLng, LatLngBounds} from "leaflet";
import {requestGet} from "../../_services/endpointConnection";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export interface IProps {
    workoutId : number,
    route : LatLng[],
    boundingBox : LatLngBounds
}

function calculateBoundingBox(gps:any[]){
    let maxLat = gps.reduce((pV, cV) => pV.latitude > cV.latitude ? pV : cV);
    let maxLng = gps.reduce((pV, cV) => pV.longitude > cV.longitude ? pV : cV)
    let minLat = gps.reduce((pV, cV) => pV.latitude < cV.latitude ? pV : cV)
    let minLng = gps.reduce((pV, cV) => pV.longitude < cV.longitude ? pV : cV)

    return new LatLngBounds({lat: minLat.latitude,lng: minLng.longitude}, {lat: maxLat.latitude,lng: maxLng.longitude})
}

function prepareRoute(gps:any[]){
    return gps.map((position : any)=> {
        return {
            lat : position.latitude,
            lng : position.longitude
        }
    })
}


class WorkoutMap extends React.Component<IProps, any>{

    constructor(props :IProps) {
        super(props);
    }



    render(){
        console.log(this.props.boundingBox , this.props.route , this.props.workoutId)
        if(this.props.boundingBox && this.props.route && this.props.workoutId) {
            console.log("map")

            return (
                <LeafletMap style={{height: '400px', width: '100%'}}
                            center={[52.069325, 19.140312]}
                            zoom={6}
                            bounds={this.props.boundingBox}
                            maxBounds={this.props.boundingBox}
                            minBounds={this.props.boundingBox}
                >
                    {this.props.route ? <Polyline positions={this.props.route}/> : <></>}
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                               attribution={'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}/>
                </LeafletMap>
            )
        } else {
            return <></>
        }
    }
}

function mapStateToProps({workouts, router} : any, ownProps : any){
    console.log(router)
    if(workouts.selectedWorkout){
        return {
            workoutId : workouts.selectedWorkout.id,
            route : prepareRoute(workouts.selectedWorkout.gps),
            boundingBox : calculateBoundingBox(workouts.selectedWorkout.gps)
        }
    } else {
        return {
            workoutId : null,
                route : null,
            boundingBox : null
        }
    }
}

export default connect(mapStateToProps)(WorkoutMap)

