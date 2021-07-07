/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-var */
const functions = require("firebase-functions");
const watson = require("watson-developer-cloud/assistant/v1");
require("dotenv").config();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from chatbot!");
// });

const chatbot = new watson({
  version: `${process.env.VERSION}`,
  url: process.env.ASSISTANT_IAM_URL || "<url>",
  iam_apikey: process.env.ASSISTANT_IAM_APIKEY || "<iam_apikey>",
  iam_url: process.env.IAM_URL,
});

var payload = {};

const workspace_id = process.env.WORKSPACE_ID;

const trataResposta = (payload, resposta) => {
  console.log("watson disse:", resposta.output.text[0]);
  return resposta;
};

exports.conversa = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    payload = {
      workspace_id: process.env.WORKSPACE_ID,
      context: req.body.context || {},
      input: req.body.input || {},
    };

    chatbot.message(payload, function(err, data) {
      if (err) {
        return res.status(err.code || 500).json(err);
      }

      return res.json(trataResposta(payload, data));
    });
  }
});
