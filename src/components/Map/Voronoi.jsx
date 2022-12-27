import Delaunator from 'delaunator';
import { Polygon, Tooltip } from 'react-leaflet';
let {Sensors} = require("../../api/pm2P5.js")




function MakeTrianglePoints() {


    //const delaunay = Delaunator.from(xyPoints.map((p) => [p.x, p.y]));
    const delaunay = Delaunator.from(Sensors.map((sensor) => [sensor.longitude, sensor.latitude]));
    const triangleIndices = delaunay.triangles;
    let triangleCoords = [];

    for (let i = 0; i < triangleIndices.length; i += 3) {

        const sensor1 = Sensors[triangleIndices[i]]; //{ x: 1, y: 43 },
        const sensor2 = Sensors[triangleIndices[i + 1]];
        const sensor3 = Sensors[triangleIndices[i + 2]];

        let item = {

            coordinate: [
                [sensor1.latitude, sensor1.longitude],
                [sensor2.latitude, sensor2.longitude],
                [sensor3.latitude, sensor3.longitude]
            ],
            pm2P5: [sensor3.pm2P5, sensor3.pm2P5, sensor3.pm2P5],
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
                    <Polygon key={index} pathOptions={{ color: getColor(item.pm2P5) }
                    } positions={item.coordinate} >

                        <Tooltip sticky>PM 2.5(µg/m3) {getCentralPM2P5(item.pm2P5)}</Tooltip>
                    </Polygon>

                ))

            }



        </>
    );


}

function getCentralPM2P5(pm2P5)
{
    return ((pm2P5[0] + pm2P5[1] + pm2P5[2]) / 3).toFixed(2);

}

function getColor(pm2P5)
{
    const centralPoint = getCentralPM2P5(pm2P5);

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








export default MakeTriangles;
