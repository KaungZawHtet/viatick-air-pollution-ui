import React from 'react';
import { Container } from 'react-bootstrap'

const D3Playground = () => {
    // page content
    const pageTitle = 'D3Playground'
    const pageDescription = 'This is About Page'

    return (
        <Container>
            <div className='d-flex justify-content-center'>
                <svg id="voronoi-diagram" width="500" height="500" style="border: 1px solid black;"></svg>

            </div>
        </Container>
    )
}

export default D3Playground