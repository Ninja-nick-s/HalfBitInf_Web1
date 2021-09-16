# Creating Note Making WebApp

## Goal

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

- Start your mongodb server in your local environment
- install dependencies & start project
  ```
  npm install
  npm run server
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
