const express = require("express");
const app = express();
var cors = require('cors')

const app = Express()
app.use(cors())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
app.get('/', (req, res) => res.send("Hola mundo API de caracteristicas del comercio"));



app.get('/caracteristicas', (req, res) => {
    const caracteristicas = [

        {
            PetFrendly: "SI",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "SI",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "SI"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "NO"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "NO",
            AceptanBitcoin: "SI",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "SI"
        },
        {
            PetFrendly: "SI",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "NO",
            Delivery: "NO"
        },
        {
            PetFrendly: "SI",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "SI",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "NO"
        },
        {
            PetFrendly: "SI",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "NO",
            Delivery: "SI"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "NO",
            AceptanBitcoin: "SI",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "NO"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "NO"
        },
        {
            PetFrendly: "SI",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "NO",
            Delivery: "SI"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "NO",
            AceptanBitcoin: "SI",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "SI"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "NO",
            Delivery: "NO"
        },
        {
            PetFrendly: "SI",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "SI",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "NO"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "NO",
            Delivery: "SI"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "NO",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "NO"
        },
        {
            PetFrendly: "SI",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "SI",
            UsoObligatorioDeMascarilla: "NO",
            Delivery: "SI"
        },
        {
            PetFrendly: "NO",
            ProtocoloCOVId: "SI",
            Baños: "SI",
            AceptanBitcoin: "NO",
            UsoObligatorioDeMascarilla: "SI",
            Delivery: "NO"
        }
    ];
    res.json(caracteristicas);
});