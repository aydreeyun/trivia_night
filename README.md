# Trivia Night
Welcome to Trivia Night! This is a trivia application that was created with React and data being extracted from a JSON file.

The instructions for how to play are listed on the landing page.

## Technologies Used

* React
* Node.js
* Sass/SCSS

## Notable Features

* __Question and Answer shuffling__ - I created a method that will successfully shuffle the array of questions and their answer choices in order to make each round of trivia different from the last
* __Real-time score updates__ - Using React's local state, I was able to update the score in real time by adding each time the user correctly answers a question.

## How to Run
* `npm install` to download the packages required to run this project
* `npm start` to launch the application in localhost:3000

## Additional Features to Add

* Question Timer for each question to receive an answer within a certain time limit (~60 seconds)
* Score multiplier dependent on how fast you answer the question
* Adding categories to each question to filter certain trivia questions each round
