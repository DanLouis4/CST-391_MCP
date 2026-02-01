// import express necessary modules:
//    express for creating an HTTP server, Request and Response for handling HTTP requests and responses from the express package that provides type definitions for TypeScript
//    dotenv for loading environment variables from a .env file into process.env
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

// import cors for enabling Cross-Origin Resource Sharing (CORS) in the Express application
// This allows the server to handle requests from different origins
import cors from 'cors';

// import helmet for enhancing the security of the Express application by setting various HTTP headers
// It helps protect the app from some well-known web vulnerabilities by configuring the headers appropriately
import helmet from 'helmet';

// import custom logger middleware
import logger from './middleware/logger.middleware';

// import songs and albums routes
import songsRoutes from './songs/songs.routes';
import albumsRoutes from './albums/albums.routes';

// load environment variables from .env file into process.env
dotenv.config();

// create an instance of express
const app = express();

// define the port number
const port = 3000;

// enable all CORS requests
app.use(cors());

// middleware to parse incoming JSON requests
app.use(express.json());

// middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// adding set of security middlewares provided by helmet
app.use(helmet());

// log the database host from environment variables for debugging purposes
console.log(process.env.MY_SQL_DB_HOST);

// use the logger middleware only in development mode
if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode')
}

// Applications routes
// root routes
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the MCP: My Christian Playlist Music API!</h1>');
});

// use the imported routes for handling requests to /albums and /songs endpoints
// Parameter '/' indicates that these routes are mounted at the root path
// so requests to /albums and /songs will be handled by their respective route handlers
app.use('/', [songsRoutes, albumsRoutes]);

// start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});