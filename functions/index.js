// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const function = require("firebase-fucntions");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51N9vIeSBKLOcXfw1FriMW7bEKhrB3u8BuqO17w1NBfvMDijVyBexKVzNNYudvrWZfmzaKga9Uc9y2MaksE957ZcY00gbSW5nxc"
);

const app = express();

app.use(cors({origin:true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  //amount in subunits
  const total = request.query.total;
  
  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //  note total is in subunits
    currency: "usd",
  });

  //status for ok-created everything is working fine
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//api endpoint
// http://127.0.0.1:5001/information-oasis/us-central1/api
