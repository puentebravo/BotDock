// See: https://www.twilio.com/docs/sms/tutorials/how-to-send-sms-messages-node-js
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

// returns a Promise that resolves with a Message Object
// See: https://www.twilio.com/docs/sms/api/message-resource#message-properties
// usage:
// notify({ body: "Body of Message", to: "+15555555555" })
// .then(message => console.log(message));
//
function notify({ body, to }) {
    return client.messages.create({
      body,
      to,
      from: phoneNumber
    });
  }