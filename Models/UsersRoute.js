const express = require('express')
let router = express.Router();
const users = require("../models/usersRoute.js");

// user endpointet, der viser begge brugere
router.get('/', (req, res) => {
    res.json(users.myUsers);
});

//PaymentUser endpoint, der viser Paymentuser
router.get('/payment', (req, res) => {
    res.json(users.myUsers);
})

