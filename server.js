const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const auth0Config = require("./auth0_config.json");

// Create a new Express app
const app = express();

if (
  !auth0Config.domain ||
  !auth0Config.audience
) {
  throw "Please make sure that auth0_config.json is in place and populated";
}

// Define middleware that validates incoming bearer tokens
// using JWKS from yvandoorn
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${auth0Config.domain}/.well-known/jwks.json`
  }),

  audience: auth0Config.audience,
  issuer: `https://${auth0Config.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/order", checkJwt, (req, res) => {
  res.send({
    msg: "You can order delicious pizza!!"
  });
});

// Start the app
app.listen(3001, () => console.log('Order API listening on 3001'))
