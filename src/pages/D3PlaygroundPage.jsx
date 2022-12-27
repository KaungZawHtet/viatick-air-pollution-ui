import React from 'react';
import { Container,Stack } from 'react-bootstrap'
import Delaunator from 'delaunator';
import randomColor from "randomcolor";


const D3PlaygroundPage = () => {

    const pts = [
        { x: 1, y: 43 },
        { x: 13, y: 2 },
        { x: 11, y: 66 },
        { x: 6, y: 12 },
        { x: 43, y: 86 },
        { x: 12, y: 32 },
        { x: 65, y: 1 },
        { x: 34, y: 54 },
        { x: 11, y: 22 },
        { x: 80, y: 80 },
    ]

    console.log(pts);


    const delaunay = Delaunator.from(pts.map((p) => [p.x, p.y]));
    const triangleIndices = delaunay.triangles;
    const triangleCoords = [];
    for (let i = 0; i < triangleIndices.length; i += 3) {
        triangleCoords.push([
            pts[triangleIndices[i]],
            pts[triangleIndices[i + 1]],
            pts[triangleIndices[i + 2]],
        ]);
    }





    return (


        <Container  >
            <Stack direction='vertical' gap={2}>

                <h4 className='d-flex justify-content-center'> Voronoi Diagram by using Delaunator (base of D3-Delaunay) </h4>


                <div className='d-flex justify-content-center'>
                    <div className="border" style={{
                        width: '600px',
                        height: '700px'
                    }}>



                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {pts.map((pt) => (
                        <circle cx={pt.x} cy={pt.y} r="0.5" fill={randomColor()} />
                    ))}

                    {
                    triangleCoords.map(([a, b, c]) => (
                            <polygon
                                points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}`}
                                style={{
                                    fill: randomColor(),
                                    stroke: 'purple',
                                    strokeWidth: 0,
                                }}
                            />
                        ))}
                        </svg>
                    </div>

                </div>






            </Stack>



        </Container>




    )
}

export default D3PlaygroundPage