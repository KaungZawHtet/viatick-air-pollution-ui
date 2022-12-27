import React from 'react';
import MapViewer from '../components/Map/MapViewer';
import { Container,Stack ,Button} from 'react-bootstrap'
import SaveButton from '../components/Map/SaveButton'
import PdfButton from '../components/Map/PdfButton';

const Map = () => {



    return (
        <Container >
            <Stack direction='vertical' gap={2}>
                <div className='d-flex justify-content-center'>

                    <MapViewer />

                </div>

                <Stack direction='horizontal' gap={2} className="col-md-5 mx-auto justify-content-center">
                    <SaveButton/>
                    <PdfButton />
                </Stack>




            </Stack>



        </Container>
    )
}

export default Map