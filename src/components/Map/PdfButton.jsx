import React from 'react'
import Button from 'react-bootstrap/Button';
import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Link } from "react-router-dom";


// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);


function PdfButton() {
    return (
        <>
            <Link to="/pdfdisplay" className="btn btn-danger nav-link px-2 link-secondary">
                Export PDF
            </Link>

        </>
    )
}

function onExportPdf() {
    ReactPDF.renderToStream(<MyDocument />);
}

export default PdfButton;