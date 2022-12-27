import Delaunator from 'delaunator';
import randomColor from "randomcolor";
import { Polygon } from 'react-leaflet';
let sensors = [

    {
        "sensorId": "sensorA",
        "latitude": 52.230425,
        "longitude": 21.010768,
        "pm2.5": getPM25()
    },
    {
        "sensorId": "sensorB",
        "latitude": 52.230517,
        "longitude": 21.011353,
    },
    {
        "sensorId": "sensorC",
        "latitude": 52.230227,
        "longitude": 21.011068,
    },
    {
        "sensorId": "sensorD",
        "latitude": 52.23027,
        "longitude": 21.011513,
    },
    {
        "sensorId": "sensorE",
        "latitude": 52.230171,
        "longitude": 21.01205,
    },
    {
        "sensorId": "sensorF",
        "latitude": 52.230454,
        "longitude": 21.012704,
    },
    {
        "sensorId": "sensorG",
        "latitude": 52.229412,
        "longitude": 21.010655,
    },
    {
        "sensorId": "sensorF",
        "latitude": 52.229902,
        "longitude": 21.011556,
    },
    {
        "sensorId": "sensorH",
        "latitude": 52.229635,
        "longitude": 21.012366,
    },
    {
        "sensorId": "sensorI",
        "latitude": 52.229379,
        "longitude": 21.012624,
    },
    {
        "sensorId": "sensorJ",
        "latitude": 52.229448,
        "longitude": 21.012372,
    },
    {
        "sensorId": "sensorK",
        "latitude": 52.229435,
        "longitude": 21.013241,
    },
    {
        "sensorId": "sensorL",
        "latitude": 52.229211,
        "longitude": 21.013407,
    }

]

const pts = [
    { x: 1, y: 43 },
    { x: 13, y: 2 },
    { x: 11, y: 66 },
    { x: 6, y: 12 },
    { x: 43, y: 86 },
    { x: 12, y: 32 },
    { x: 65, y: 1 },
]

function MakePoint() {
    let points = sensors.map(item => {

        let point = {
            x: item.latitude,
            y: item.longitude
        }
        return point;

    });

    //console.log(pts);

    //console.log(points);

    return points;

}

function MakeTrianglePoints() {
    const xyPoints = MakePoint();

    //const delaunay = Delaunator.from(xyPoints.map((p) => [p.x, p.y]));
    const delaunay = Delaunator.from(sensors.map((sensor) => [sensor.longitude, sensor.latitude]));
    const triangleIndices = delaunay.triangles;
    const triangleCoords = [];

    for (let i = 0; i < triangleIndices.length; i += 3) {

        const sensor1 = sensors[triangleIndices[i]]; //{ x: 1, y: 43 },
        const sensor2 = sensors[triangleIndices[i + 1]];
        const sensor3 = sensors[triangleIndices[i + 2]];

        triangleCoords.push([
            { x: sensor1.latitude, y: sensor1.longitude },
            { x: sensor2.latitude, y: sensor2.longitude },
            { x: sensor3.latitude, y: sensor3.longitude },
        ]);
    }

    /* triangleCoords.push([
        xyPoints[triangleIndices[i]],
        xyPoints[triangleIndices[i + 1]],
        xyPoints[triangleIndices[i + 2]],
    ]); */

    return triangleCoords;
}

//console.log(triangleCoords);




const MakeTriangles = () => {
    let triangleCoords = MakeTrianglePoints();

    const polygonPoints = triangleCoords.map(([a, b, c]) => (
        [
            [a.x, a.y],
            [b.x, b.y],
            [c.x, c.y]
        ]
    ))


    return (
        <>

            {
                polygonPoints.map((item,index) => (
                    <Polygon key={index} pathOptions={{ color: randomColor() }
                    } positions={item} />

                ))

            }



        </>
    );


}

function getColor(item) {

    /*
        [
            [a.x, a.y],
            [b.x, b.y],
            [c.x, c.y]
        ]

    */

}

function getPM25() {

    console.log("This is 32")

    return 32;

    /*
        [
            [a.x, a.y],
            [b.x, b.y],
            [c.x, c.y]
        ]

    */

}







export default MakeTriangles;
