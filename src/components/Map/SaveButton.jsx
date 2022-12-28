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

  let timestamp = Date.now();


    Sensors.map( async (item) => {

        const log = {

            "sensorId": item.sensorId,
            "latitude": item.latitude,
            "longitude": item.longitude,
          "pm2P5": item.pm2P5,
          "timestamp": timestamp

        };

          await fetch(`http://localhost:8080/api/pmlogs`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
              body: JSON.stringify(log)
          }).then((req) => {
            console.log("Receive HTTP Status : " + req.status);
        });

    });

  alert("Check in the Browser Console for status. If successful, will receive HTTP Status 200. If error, Please check if your server is on");




};




export default SaveButton