# Become a Jeopardy Ninja!

## Link to Heroku: https://jeopardy-ninja.herokuapp.com/ 

Please 1.) Open in Chrome and 2.) Load Unsafe Scripts

Because this site requires loading data fetched from the jservice.io API, make sure to allow Loading of Unsafe Scripts in Chrome. When you open the link, on the right end of the search bar, there is a shield with a little red x. Click on it and Load Unsafe Scripts.


## Capabilities:

-Refresh page to get new batch of 100 random clues

-Search by question title by default, but one can switch search criteria

-Click on questions to see more details. Click again to hide details.


## Known bugs:

-Searching by month name doesn't return correct results

-Because the API data isn't perfectly formatted, occasionally questions and different criteria will show up blank or with additional random characters 


## Changes I'd make:

I would first deal with the functionality issues. I wouldn't display questions that were null, and I'd trim out random characters. I'd then spend more time on UI/UX. I would either make the site look like a traditional Jeopardy board, or work on the colors a bit. I intentionally designed the site so that it would have a very Craigslist-esque feel for a scrappy trivia enthusiast, but it could have also been cool to explore a different ambiance.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

