import React ,{ useRef } from 'react';
import MapViewer from '../components/Map/MapViewer';
import { Container,Stack ,Button} from 'react-bootstrap'
import SaveButton from '../components/Map/SaveButton'
import PdfButton from '../components/Map/PdfButton';

import { useReactToPrint } from 'react-to-print';
const MapPage = () => {


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });



    return (
        <Container  >
            <Stack ref={componentRef}  direction='vertical' gap={2}>
                <div className='d-flex justify-content-center'>

                    <MapViewer  />

                </div>

                <Stack direction='horizontal' gap={2} className="col-md-5 mx-auto justify-content-center">
                    <SaveButton/>
                    <PdfButton onClick={handlePrint} />
                </Stack>




            </Stack>



        </Container>
    )
}

export default MapPage