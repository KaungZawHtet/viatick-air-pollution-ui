let sensors = [

    {
        "sensorId": "sensorA",
        "latitude": 52.230425,
        "longitude": 21.010768,
        "pm2.5": getPMTwoPointFive()
    },
    {
        "sensorId": "sensorB",
        "latitude": 52.230517,
        "longitude": 21.011353,
    },
    {
        "sensorId": "sensorC",
        "latitude": 52.230227,
        "longitude": 21.011068,
    },
    {
        "sensorId": "sensorD",
        "latitude": 52.23027,
        "longitude": 21.011513,
    },
    {
        "sensorId": "sensorE",
        "latitude": 52.230171,
        "longitude": 21.01205,
    },
    {
        "sensorId": "sensorF",
        "latitude": 52.230454,
        "longitude": 21.012704,
    },
    {
        "sensorId": "sensorG",
        "latitude": 52.229412,
        "longitude": 21.010655,
    },
    {
        "sensorId": "sensorF",
        "latitude": 52.229902,
        "longitude": 21.011556,
    },
    {
        "sensorId": "sensorH",
        "latitude": 52.229635,
        "longitude": 21.012366,
    },
    {
        "sensorId": "sensorI",
        "latitude": 52.229379,
        "longitude": 21.012624,
    },
    {
        "sensorId": "sensorJ",
        "latitude": 52.229448,
        "longitude": 21.012372,
    },
    {
        "sensorId": "sensorK",
        "latitude": 52.229435,
        "longitude": 21.013241,
    },
    {
        "sensorId": "sensorL",
        "latitude": 52.229211,
        "longitude": 21.013407,
    }

];



function getColor(item) {

    /*
        [
            [a.x, a.y],
            [b.x, b.y],
            [c.x, c.y]
        ]

    */




}

function getPMTwoPointFive() {

    console.log("This is 32")

    return Math.floor(Math.random() * 71);



}