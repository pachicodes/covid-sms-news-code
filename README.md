# covid-news-sms
a Simple application that will send daily SMSs with news about COVID-19


## About

This is a simple app that will send and SMS for the users with News about the COVID-19 in the USA.


### How it works

Here is how this application works:
1. User send an SMS with the word news to this project Twilio number,
2. Twilio number gets the message and replays asking user to send back the word Subscribe if they want to get daily news,
3. If user replies with the word Subscribe, their phone number is saved in our list,
4. Using a COVID News API, we will send daily news about the topic to the numbers in our list.
5. If an user that is subscribed sends any word other them STOP to the app number, they will get a message telling them that the command is unvalid, and is they want to opt-ot, they should reply with thw word STOP.


The follwing elements had their real values were stored on a .env file for security reasons, so here is the rescription of each:

-ACCOUNT_SID = 'Your Twilio Account Sid number'
-AUTH_TOKEN = 'Your Twilio Auth Token number'
-APP_NUMBER = 'Your Twilio Phone number'
-MY_NUMBER = 'A phone number for testing'


## Resources

- [Twilio SMS API](https://www.twilio.com/docs/sms)
- [Twilio Phone Number](https://www.twilio.com/docs/phone-numbers)
- [Smartable.ai Coronavirus Information API](https://developer.smartable.ai/api-details#api=coronavirus&operation=news) 


## Contributing

You can add and issue and PR your contribution.

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.





