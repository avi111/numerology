var admin = require("firebase-admin");

var serviceAccount = require("./.data/service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://numerology-ae61d.firebaseio.com"
});

import * as functions from './src';

export default functions;