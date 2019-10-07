//TO DO: make email the req body email address
//TO DO: make form in front end for email address
const addEmailToNewsletter = (email) => {
    var request = require("request");

    var options = { method: 'POST',
    url: 'https://us20.api.mailchimp.com/3.0/lists/84613382fc/members',
    headers: 
    { 'cache-control': 'no-cache',
        Connection: 'keep-alive',
        Cookie: '_mcid=1.f13c2792d4c518b05a7c3e18c7a0c31c.ca2c9d73a0b81cbe837b4694ff40d003e8ed0e668da91a657d0f0371c0f80823; _AVESTA_ENVIRONMENT=prod',
        'Content-Length': '69',
        'Accept-Encoding': 'gzip, deflate',
        Host: 'us20.api.mailchimp.com',
        'Postman-Token': 'aad1436f-ae5d-42ea-84ec-a4a35bcbf688,34e83d02-3f0c-48be-ad20-23047795b6d2',
        'Cache-Control': 'no-cache',
        Accept: '*/*',
        'User-Agent': 'PostmanRuntime/7.16.3',
        Authorization: 'Basic YW55c3RyaW5nOmY4YmQyYmEzYmE5MGVmNGYwYzA4MDA2NzViMjNhYmNiLXVzMjA=',
        'Content-Type': 'application/json' },
    body: { email_address: email, status: 'subscribed' },
    json: true };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    });

}

module.exports = {
    addEmailToNewsletter
}