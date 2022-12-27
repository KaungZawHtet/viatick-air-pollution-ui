import React from 'react'
import Button from 'react-bootstrap/Button';

let { Sensors } = require("../../api/pm2P5.js")
function SaveButton({data}) {
    return (
      <>
            <Button variant="primary" onClick={onSave}>Save into server</Button>
      </>
    )
}



const onSave = () => {


    Sensors.map( async (item) => {

        const log = {

            "sensorId": item.sensorId,
            "latitude": item.latitude,
            "longitude": item.longitude,
            "pm2P5": 32.32,

        };

          await fetch(`http://localhost:8080/api/pmlogs`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
              body: JSON.stringify(log)
        });

    });

    alert("Successfully saved all logs into server");


};




export default SaveButton