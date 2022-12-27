import React from 'react';
import { useState, useEffect } from 'react';

const RecordsPage = () => {
    // page content


    let [pmlog, setPmlog] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const jsonData = await fetch('http://localhost:5000/api/pmlogs');
            const tasksFromServer = await jsonData.json();

            setPmlog(tasksFromServer);
        };



        getTasks();

    }, []);



    return (
        <div>

        </div>
    )
}

export default RecordsPage