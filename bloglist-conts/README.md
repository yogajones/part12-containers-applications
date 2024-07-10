# BlogList App
 
The BlogList App allows logged-in users to save, view and comment on blogs they find interesting.

The app was created as a series of exercises in the Full Stack Open MOOC course.

## Installation

0. Prerequisites:

   - Node.js 18
   - MongoDB Atlas account

1. Clone, fork or download this repository.

2. In the project root, run

`npm install`

3. Create a .env file inside the backend directory and add the following environment variables:

MONGODB_URI=<your production database address>
TEST_MONGODB_URI=<your test database address>
SECRET=<your secret>
PORT=3003

For the URIs, follow the instructions [here](https://fullstackopen.com/en/part3/saving_data_to_mongo_db#mongo-db).

For the SECRET, any random string will do.

4. In the project root, run

`npm run build:ui`

## Usage

1. In the backend directory, run

`npm start`

2. With your favourite browser, navigate to

`localhost:3003`

## Running in development mode with Docker

1. In the project root, run

`docker compose -f docker-compose.dev.yml up`

2. Navigate to

`localhost:8080`

## Running in production mode with Docker

1. In the project root, run

`docker compose -f docker-compose.yml up`

2. Navigate to

`localhost:8080`

## Technologies Used

The app uses the MERN (MongoDB, Express, React, Node.js) stack.

Additional flavours come from Redux and Material UI among others. Please see the package.json files for details.

## Project status

The BlogList App is a personal learning project and does not aim for production use. Development might (and eventually, will) halt at any given time.
