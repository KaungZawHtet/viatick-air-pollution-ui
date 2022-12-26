import React from 'react';
<<<<<<< HEAD
import MapViewer from '../components/Map/MapViewer';
import { Container } from 'react-bootstrap'
=======

import Meta from '../components/Meta'
>>>>>>> master

const Map = () => {
    // page content
    const pageTitle = 'Map'
    const pageDescription = 'This is Map Page'

    return (
        <Container>
            <div className='d-flex justify-content-center'>
                <MapViewer/>
            </div>
        </Container>
    )
}

export default Map