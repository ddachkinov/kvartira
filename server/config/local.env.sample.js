'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'kvartira-secret',

  FACEBOOK_ID:      '1747896762115996',
  FACEBOOK_SECRET:  '0619be021e4b5046f110989e49616501',

  TWITTER_ID:       'd20bA3HejqjNlxKO4pa3eMY6u',
  TWITTER_SECRET:   'M5aKGimqHxwRpflJ5EInfrKw4iPNhcM2VTYXwASP5G9Py5v3RT',

  GOOGLE_ID:        '454142285445-1spem6ti2a9jpc41q58etniktmtlvtjb.apps.googleusercontent.com',
  GOOGLE_SECRET:    'lbc-bwpLSuYagy59pV-Wfy-2',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
