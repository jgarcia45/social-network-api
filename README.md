<h1 align="center"> NoSQL Challenge: Social Network API </h1>

[![MSU](https://img.shields.io/badge/MSU-Coding%20Bootcamp-green/)](https://bootcamp.msu.edu/)
![GitHub](https://img.shields.io/github/license/jgarcia45/social-network-api)

## Technologies
![Technologies](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies](https://img.shields.io/badge/-JavaScript-007396?logo=JavaScript&logoColor=white)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white)
![Technologies](https://img.shields.io/badge/-Sequelize-52B0E7?logo=Sequelize&logoColor=white)
![Technologies](https://img.shields.io/badge/-Express-000000?logo=&logoColor=white)
![Technologies](https://img.shields.io/badge/-dotenv-000000?logo=&logoColor=white)

## Description
The challenge is to build an API for a social network application. It will allow the users to share their thoughts, react to friends' thoughts, and create a friend list. We will be using Express.js for routing, a MongoDB database, and the Mongoose ODM. We may also optionally use a JavaScript date library of our choice. This application will not be deployed so a video will be provided to demonstrate the challenge.

## Installation
***Requirments***

[Node.js](https://nodejs.org/en/) | [MySQL](https://www.npmjs.com/package/mysql2) | [Sequelize](https://www.npmjs.com/package/sequelize) | [dotenv](https://www.npmjs.com/package/dotenv) | [Express](https://www.npmjs.com/package/express)

***Once Installed:***
1. Clone the Repository on to your machine.
2. Open the terminal and ensure you are in the right file path.
3. Run the command ```npm install``` to download the packages.
4. Log into my sequel and run the command ```source db/schema.sql``` to create the database.
5. Run the command ```npm run seed``` to seed the database.
6. Then run the command ```node start``` to run the software.
7. The application will then begin to run locally.

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Screenshot

## Link
A link to the [code](https://github.com/jgarcia45/social-network-api):
```
https://github.com/jgarcia45/social-network-api
```

A link to the [Video]():
```
```

## License
Copyright (c) Juan Garcia. All rights reserved.

Licensed under the [MIT](LICENSE) license.