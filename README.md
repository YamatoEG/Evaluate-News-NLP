Evaluate A News Article with Natural Language Processing
This project allows you to analyze news articles using Natural Language Processing (NLP) techniques, bundled with Webpack, and powered by a Node.js server. The project utilizes several technologies, including HTML, Sass, Babel, Express, and Jest for testing, to provide a complete development and production pipeline.

## Technologies Used

- Webpack: For bundling and optimizing assets.
- HTML: For structuring the user interface.
- Sass: For styling the UI with advanced CSS features.
- JavaScript: For implementing the application logic.
- Babel: For transpiling modern JavaScript syntax to compatible versions.
- Node.js: For running the back-end server.
- Express: For creating the back-end server.
- axios: to fetch request from API
- Jest: For testing.
- service workers: create a cached version of your website that they can supply if the server can’t be reached.
- MeaningCloud API: For analyzing the news articles (requires an API key).

Install dependencies:

## Run the following command to install all the required dependencies:

```
npm i
```

## Set up the MeaningCloud API key:

Sign up for an account on MeaningCloud.
Get your API key from the MeaningCloud dashboard.
Create a .env file in the root directory of the project and add the following line:
env

```
API_KEY=your-api-key-here
```

##

## Start the development build:

## Run the following command to start the development server:

```
npm run build-dev
This will bundle your assets for development and open the app at http://localhost:3000.
```

##

## Run the final production build:

## To build the production version of the app, run:

```
npm run build-prod
```

## Start the Node.js server:

## To start the server, run:

```
npm start
```

This will start the Node.js server and serve the application at http://localhost:3000.

## Webpack Plugins Used

These plugins are used in the Webpack configuration to optimize and manage the build process:

\*Babel: Transpiles modern JavaScript code into backward-compatible versions.

- Style-loader: Injects styles into the DOM.
- Sass-loader: Compiles Sass to CSS.
- Clean-webpack-plugin: Cleans the output folder before each build.
- Html-webpack-plugin: Simplifies the creation of HTML files and injects the bundle.
- Mini-css-extract-plugin: Extracts CSS into separate files for production.
- Optimize-css-assets-webpack-plugin: Optimizes CSS files by minifying them.
- Terser-webpack-plugin: Minifies JavaScript files for production.

##

## To install the necessary plugins for development mode, run the following commands:

```
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
```

##

## Commands

## Development Mode

```
npm run build-dev
```

This will start the development build, which includes hot reloading and local server setup.

##

## Commands

## Production Mode

```
npm run build-prod
```

This command generates the optimized production build.

##

## Commands

## Start Node.js Server

```
npm start
```

This will start the Express server and serve your application at http://localhost:3000.

##

## Commands

## Run Tests with Jest

You can run unit tests using Jest with the following command:

```
npm test
```

This command will run the tests defined in the project and display results in the console.

##

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
