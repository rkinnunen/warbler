# Warbler

A Twitter-lite React app with a single global messageboard.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Create a `.env` file in the `server` folder with your `SECRET_KEY` variable for password hashing.

```
SECRET_KEY=YourStringOfRandomCharacters
```

### Installing

In the `server` folder

* `npm install`
* `nodemon/node index.js`

In the `client` folder

* `npm install`
*  `npm start`

## Deployment

Live demo running on Heroku [here](https://warbler-client-rk.herokuapp.com)

You can login with the email of `testUser` and password `test`

If at first you get a 'Not Found' error, please try again.
Heroku hibernates the API server when not in use.

## Built With
### Server
* Node.js
* Express
* MongoDB

### Client

* React
* Redux
