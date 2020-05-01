const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
//require('dotenv').config();

//const accountSid = process.env.ACCOUNT_SID;
//const authToken = process.env.AUTH_TOKEN;
const accountSid = "ACCOUNT_SID";
const authToken = "AUTH_TOKEN";
const client = require("twilio")(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");

  client.messages
    .create({
      from: "APP_NUMBER",
      to: req.body.to,
      body: req.body.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
