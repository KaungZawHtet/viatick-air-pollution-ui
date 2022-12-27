const Sensors = [

    {
        "sensorId": "sensorA",
        "latitude": 52.230425,
        "longitude": 21.010768,
        "pm2P5": getPM2P5()

    },
    {
        "sensorId": "sensorB",
        "latitude": 52.230517,
        "longitude": 21.011353,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorC",
        "latitude": 52.230227,
        "longitude": 21.011068,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorD",
        "latitude": 52.23027,
        "longitude": 21.011513,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorE",
        "latitude": 52.230171,
        "longitude": 21.01205,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorF",
        "latitude": 52.230454,
        "longitude": 21.012704,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorG",
        "latitude": 52.229412,
        "longitude": 21.010655,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorF",
        "latitude": 52.229902,
        "longitude": 21.011556,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorH",
        "latitude": 52.229635,
        "longitude": 21.012366,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorI",
        "latitude": 52.229379,
        "longitude": 21.012624,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorJ",
        "latitude": 52.229448,
        "longitude": 21.012372,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorK",
        "latitude": 52.229435,
        "longitude": 21.013241,
        "pm2P5": getPM2P5()
    },
    {
        "sensorId": "sensorL",
        "latitude": 52.229211,
        "longitude": 21.013407,
        "pm2P5": getPM2P5()
    }

]



function getPM2P5() {

    const stage = Math.floor(Math.random() * 4);

    switch (stage) {
        case 1: //orange

            return Math.floor(Math.random() * 55) + 13; // 13-55

        case 2: //red

            return Math.floor(Math.random() * 70) + 55; // 55-70


        default: //green
            return Math.floor(Math.random() * 13); //below 13

    }


}

module.exports = { Sensors };


