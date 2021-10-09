# Note Maker WebApp

Hey! everyone. We did it 😎😎. Our WebApp is up and running On 👇
[Note-Keeper](https://secret-fjord-21121.herokuapp.com/)

## Devlok learning experience
### Tech-stacks which we worked upon
1. Node js
2. React js
3. Redux
4. MongoDB
### Libraries used
1. Lottie web
2. Quill js editor
3. React-Redux
4. Bcyrpt js
5. Json web token
### Devlok experience journey
- It was very Enthusiastic Event.
- We had a great learning experience.
- Awesome mentor support was their.
- We faced many challanges and tried to tackle them with tech stacks we learned.
- We had good Teamwork experience.
- Learned Working in Limited time to complete goals of our project.

## Project Goals

- Taking notes
- Saving notes
- Able to Edit
- Shareable with friends
- Rich-text formatting
- Able to comment on shared note

## How to setup project

- Clone the project and then change your directory

  ```
  git clone https://github.com/Ninja-nick-s/HalfBitInf_Web1.git
  cd HalfBitInf_Web1
  ```

- Make sure you have node lts version(14.17.6) installed
- Install node modules
  ```
  cd HalfBitInf_Web1
  npm i
  cd HalfBitInf_Web1/frontend
  npm i
  ```
- Start your mongodb server in your local environment
- install dependencies & Start project both frontend and backend
  ```
  cd HalfBitInf_Web1
  npm run dev
  ```
- Start just Backend api
  ```
  cd HalfBitInf_Web1
  npm run server
  ```
- Start just frontend

  ```
  cd HalfBitInf_Web1/frontend
  npm start
  ```

- Suggestion to use postman to test api routes

## Walkthrough Database in Terminal

- Make sure your mongod server is running
- Type mongo in terminal to start mongodb shell
- Commands to look into our database collections
  ```
  show dbs
  use NoteMaker
  show collections
  ```
- Their look our collection name & to look data into it use command
  ```
  db.collection_name.find()
  ```
- To delete single row of data of the collection look at its id & use command
  ```
  db.collection_name.deleteOne({"_id": ObjectId("idvalue")});
  ```
