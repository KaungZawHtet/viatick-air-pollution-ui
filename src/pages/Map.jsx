import React from 'react';
import MapViewer from '../components/Map/MapViewer';
import { Container } from 'react-bootstrap'

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