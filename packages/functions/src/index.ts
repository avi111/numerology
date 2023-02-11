import express from 'express';
import * as functions from 'firebase-functions';
import * as bodyParser from "body-parser";
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const main = express();
const app = express();

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

// const db = admin.firestore();

exports.app = functions.https.onRequest(main);
