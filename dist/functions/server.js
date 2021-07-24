const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const path = require('path')
const admin = require('firebase-admin')
const next = require('next');
const propTypes = require('prop-types');
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, conf: {distDir: `${path.relative(process.cwd(), __dirname)}/next`}});
const handle = app.getRequestHandler();

admin.initializeApp()

exports.next = functions.https.onRequest(async (req, res) => {
  console.log('File: ' + req.originalUrl); // log the page.js file that is being requested
  await app.prepare();
  handle(req, res);
});