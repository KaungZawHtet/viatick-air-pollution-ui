import React  from 'react'
import Button from 'react-bootstrap/Button';





const PdfButton = ({ onClick }) => {

    return (
        <>
            <Button variant="danger" onClick={onClick}>Export PDF</Button>
        </>
    )
}



export default PdfButton;