import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Container, Stack } from 'react-bootstrap'
import DeleteAllButton from '../components/Records/DeleteAllButton';
const columns = [
    {
        name: 'Sensor Id',
        selector: row => row.sensorId,
        sortable: true,
    },
    {
        name: 'Latitude',
        selector: row => row.latitude,
        sortable: true,
    },
    {
        name: 'Longitude',
        selector: row => row.longitude,
        sortable: true,
    },
    {
        name: 'PM 2.5(µg/m3)',
        selector: row => row.pm2P5,
        sortable: true,
    },
    {
        name: 'Timestamp',
        selector: row => row.timestamp,
        sortable: true,
    },
];




const RecordsPage = () => {

    let [pmlogs, setPmlogs] = useState([]);



    useEffect(() => {
        const getTasks = async () => {
            const jsonData = await fetch('http://localhost:8080/api/pmlogs');
            const tasksFromServer = await jsonData.json();

            setPmlogs(tasksFromServer);
        };
        getTasks();

    }, []);
    const onDeleteAll = async () => {

        await fetch('http://localhost:8080/api/pmlogs', {
            method: "DELETE"
        })
        console.log("delete");

        setPmlogs([]);
    };




    return (
        <Container  >
            <Stack direction='vertical' gap={2}>
                <DataTable
                    //title="PM 2.5 Detection by Sensors"
                    columns={columns}
                    data={pmlogs}
                    pagination


                />

                <Stack direction='horizontal' gap={2} className="col-md-5 mx-auto justify-content-center">

                    {pmlogs.length===  0? <div></div>   :<DeleteAllButton onClick={onDeleteAll} />}
                </Stack>




            </Stack>



        </Container>

    )
}




export default RecordsPage