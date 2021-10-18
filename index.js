var express = require("express");
var app = express();

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

app.listen(process.env.PORT || 3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});