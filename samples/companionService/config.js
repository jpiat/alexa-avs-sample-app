/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.398c10b39e094752b1d72ad1a3a8c1d6',
    clientSecret: '8b2c7fbc347f3e63d14c6b40e3769e057eeac37eb199e25704f3bd85fcbbcad2',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/jpiat/development/WEB/alexa-avs-sample-app/samples/javaclient/certs/server/node.key',
    sslCert: '/home/jpiat/development/WEB/alexa-avs-sample-app/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/jpiat/development/WEB/alexa-avs-sample-app/samples/javaclient/certs/ca/ca.crt',
    products: {
        "pi_jarvis": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
