

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MyMarkers from './Map/MyMarkers';
import CoordinateDisplay from './Map/CoordinateDisplay';

const tileLayer = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const center = [52.22977, 21.01178];




const Map = () => {
    return (
        <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
            <TileLayer {...tileLayer} />
            <MyMarkers data={[]} />
            <CoordinateDisplay />
        </MapContainer>
    )
}

export default Map;