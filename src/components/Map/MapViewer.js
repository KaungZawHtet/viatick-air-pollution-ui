

import { MapContainer, TileLayer, Marker, Popup,Polygon } from 'react-leaflet';
//import MyMarkers from './MyMarkers';
import CoordinateDisplay from './CoordinateDisplay';
import MakeTriangles from './Voronoi';
const tileLayer = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const center = [52.22977, 21.01178];


let sensors = [

    {
        "sensorId": "sensorA",
        "latitude": "52.230425",
        "longitude": "21.010768",
    },
    {
        "sensorId": "sensorB",
        "latitude": "52.230517",
        "longitude": "21.011353",
    },
    {
        "sensorId": "sensorC",
        "latitude": "52.230227",
        "longitude": "21.011068",
    },
    {
        "sensorId": "sensorD",
        "latitude": "52.23027",
        "longitude": "21.011513",
    },
    {
        "sensorId": "sensorE",
        "latitude": "52.230171",
        "longitude": "21.01205",
    },
    {
        "sensorId": "sensorF",
        "latitude": "52.230454",
        "longitude": "21.012704",
    },
    {
        "sensorId": "sensorG",
        "latitude": "52.229412",
        "longitude": "21.010655",
    },
    {
        "sensorId": "sensorF",
        "latitude": "52.229902",
        "longitude": "21.011556",
    },
    {
        "sensorId": "sensorH",
        "latitude": "52.229635",
        "longitude": "21.012366",
    },
    {
        "sensorId": "sensorI",
        "latitude": "52.229379",
        "longitude": "21.012624",
    },
    {
        "sensorId": "sensorJ",
        "latitude": "52.229448",
        "longitude": "21.012372",
    },
    {
        "sensorId": "sensorK",
        "latitude": "52.229435",
        "longitude": "21.013241",
    },
    {
        "sensorId": "sensorL",
        "latitude": "52.229211",
        "longitude": "21.013407",
    }

]


const polygon = [
    [52.230020586193795, 21.01083755493164],
    [52.22924516170657, 21.011320352554325],
    [52.229511304688444, 21.01270973682404],
]
const purpleOptions = { color: 'purple' }


const MapViewer = () => {
    return (
        <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
            <TileLayer {...tileLayer} />
            {/* <MyMarkers data={[]} /> */}
            <CoordinateDisplay />
            <MakeTriangles />


            {/* <Polygon pathOptions={purpleOptions} positions={polygon} /> */}
        </MapContainer>
    );




}

export default MapViewer;