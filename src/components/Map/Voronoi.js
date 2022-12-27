import Delaunator from 'delaunator';
import { Polygon } from 'react-leaflet';
let sensors = [

    {
        "sensorId": "sensorA",
        "latitude": 52.230425,
        "longitude": 21.010768,

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



function MakeTrianglePoints() {


    //const delaunay = Delaunator.from(xyPoints.map((p) => [p.x, p.y]));
    const delaunay = Delaunator.from(sensors.map((sensor) => [sensor.longitude, sensor.latitude]));
    const triangleIndices = delaunay.triangles;
    let triangleCoords = [];

    for (let i = 0; i < triangleIndices.length; i += 3) {

        const sensor1 = sensors[triangleIndices[i]]; //{ x: 1, y: 43 },
        const sensor2 = sensors[triangleIndices[i + 1]];
        const sensor3 = sensors[triangleIndices[i + 2]];

        let item = {

            coordinate: [
                [sensor1.latitude, sensor1.longitude],
                [sensor2.latitude, sensor2.longitude],
                [sensor3.latitude, sensor3.longitude]
            ],
            pmTwoPointFive: [getPMTwoPointFive(), getPMTwoPointFive(), getPMTwoPointFive()],
        };

        triangleCoords.push(item);

    }



    return triangleCoords;
}






const MakeTriangles = () => {
    let triangleCoords = MakeTrianglePoints();

    return (
        <>

            {
                triangleCoords.map((item,index) => (
                    <Polygon key={index} pathOptions={{ color: getColor(item.pmTwoPointFive) }
                    } positions={item.coordinate} />

                ))

            }



        </>
    );


}

function getColor(pmTwoPointFive)
{
    const centralPoint = (pmTwoPointFive[0] + pmTwoPointFive[1] + pmTwoPointFive[2]) / 3;

    if (centralPoint <= 12) {

        return "green";

    }
    else if (centralPoint < 55 && centralPoint>12)
    {
        return "orange";

        }

    else {

        return "red";

    }

}


function getPMTwoPointFive() {

    const stage = Math.floor(Math.random() * 4);

    switch (stage) {
        case 1: //orange

            return Math.floor(Math.random() * 55) + 13; // 13-55

        case 2: //red

            return Math.floor(Math.random() * 70) + 55; // 55-70


        default: //green
            return Math.floor(Math.random() * 13); //below 13



    }


    return Math.floor(Math.random() * 71);



}







export default MakeTriangles;
