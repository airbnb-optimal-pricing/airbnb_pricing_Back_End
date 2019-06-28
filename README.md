
# Air BnB Optimal Pricing

Endpoints to register, login, and post to our data science app
App is deployed to  https://airbnboptimalprice-backend.herokuapp.com/ 


Endpoint    Description
'/'    The root directory; used as a sanity check to ensure basic server functionality. Server is successfully running
'/auth/register    The directory for registering new users, implementing { username: xxx, password: xxx } and assigned an autoincrementing ID
'/api/user/login'    The directory to log in, implementing { username: xxx, password: xxx }; a successful log in returns a welcome message and token.
Once logged in and you've pushed the jwt to headers as 'Authorization'
Endpoint    Description
'/properties/userproperties'    Submits a post request to our data science server, it will post to our db and then in turn post to our main app. Uses zipcode, bathrooms, bedrooms, room type, beds, etc
'/properties/test/'    test route with a function written in a completly different way. 
'/simple/simpleprediction'    Displays our prediction based on zip code, bedrooms and bathrooms.
Generic Login info:
Login    Password
chris      chris
test        pass
#Final Test Final test has not yet been conducted.

A Heroku Warning: It Is...Heroku
As a previous backend developer warned once, HerokuApp does some weird things with servers. New users will disappear every 4-6 hours, but seeded users are permanent. If there is data you would like to be permanent as well (pre-existing users, seed refugee stories, etc.), please let me know.