const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((request: any, response: { send: (arg0: string) => void; }) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.addMessage = functions.https.onCall((data: any, context: any) => {
  return {data, context};
});
