import * as React from "react";
import 'leaflet/dist/leaflet.css'

interface IProps{
    // lat : number
    // lng : number
    // zoom : number
}

let styles = {
    height : "400px"
};


export interface cordinate {
    lat : number;
    lng : number
}

function distance(from : cordinate, to : cordinate) {
   let radius = 6378137;   // approximate Earth radius, *in meters*
   let deltaLat = to.lat - from.lat;
   let deltaLon = to.lng - from.lng;
   let angle = 2 * Math.asin( Math.sqrt(
        Math.pow(Math.sin(deltaLat/2), 2) +
        Math.cos(from.lng) * Math.cos(to.lng) *
        Math.pow(Math.sin(deltaLon/2), 2) ) );
    return radius * angle;
}

function removeFromArray(array : any[], value : any) {
    let idx = array.indexOf(value);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
    return array;
}


function calculateRoute(points : cordinate[], startPoint : cordinate){
    let temp = [];
    let lastPoint = points.reduce((a, b) => {
        let d_a = distance(a,startPoint);
        let d_b =distance(b, startPoint);

        return d_a < d_b ? a : b;
    });
    removeFromArray(points, lastPoint);
    temp.push(lastPoint);

    for(let i = 0; i < 300; i++){
        lastPoint = points.reduce((a, b) => {
            let d_a = distance(a,lastPoint);
            let d_b =distance(b, lastPoint);

            return d_a < d_b ? a : b;
        });
        removeFromArray(points, lastPoint);
        temp.push(lastPoint);
    }

    return temp;
}


export class MapContainer extends React.Component<IProps,{}> {
    constructor(props : any) {
        super(props);
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
        }
    }



    componentDidMount(){
        // let points : cordinate[] = calculateRoute(tmp, {lat : 51.960068, lng : 23.021461});

        // tmp.sort(function (a : cordinate,b : cordinate) {
        //     return a.lat - b.lat;
        // }).map(item => points.push(item))
        //
        // tmp.sort(function (a : cordinate,b : cordinate) {
        //     return a.lng - b.lng;
        // }).map((item, index) => points[index].lng = item.lng);



        // let point = tmp.sort(function (a : cordinate,b : cordinate) {
        //     return a.lat - b.lat;
        // }).sort(function (a : cordinate,b : cordinate) {
        //     return a.lng - b.lng;
        // });

        // const map = L.map("map").setView([52.013814, 23.106169], 25);
        //
        //     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        //         attribution: 'WorkoutMap data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        //         maxZoom: 18,
        //         id: 'mapbox.streets',
        //         accessToken: 'your.mapbox.access.token'
        //     }).addTo(map);

        // let line = new L.Polyline(points, {
        //     color : 'red',
        //     weight: 3,
        //     opacity: 0.5,
        //     smoothFactor: 1
        // })
        // line.addTo(map);

    }



    render() {
        const position = {
            lat: 52.505,
            lng: 52.09,
        }

        // const map = new WorkoutMap

        return <div id={"map"} style={styles}>

        </div>
        // return <WorkoutMap center={position} zoom={this.state.zoom} style={{height:"250px",width:"400px",position:"relative"}}>
        //         <TileLayer
        //             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //             url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        //         />
        //     </WorkoutMap>
    }
}