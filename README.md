# UK Crime Visualization

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author notes
This simpe app allows the user to retrieve a list of the crimes occurred in the different districts of the UK, data provided by [Data Police UK API](https://data.police.uk). 

## Instructions, how to install the project
Open the terminal in the root directory of the project and execute `npm install`. That will add the dependencies required to make the app work.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## TODO list
1) Unit tests for the container components and all the different reducers and their actions.

2) Create some unit tests to validate that the DOM is generated properly and that the events are being handled correctly when all buttons are clicked. Due to the simplicity of the app this wasn't done, and the unit tests are more focused on the key functions of the app.

3) Create a component to display possible errors in any of the APIs.

4) Create unit tests for the async functions executed with Axios.
