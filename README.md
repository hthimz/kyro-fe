# kyro-fe

# Tech Architecture

This document provides an overview of the technology stack and architecture used in the project.

## Technology Stack

### Front-end

- **Framework**: React.js
- **Routing**: react-router-dom
- **Styling**: CSS Modules, SCSS
- **OCR Integration**: Tesseract.js

## Architecture

The project follows a client-server architecture, with a front-end application built using React.js and a back-end server built using Node.js and Express.js. The data is stored in a MongoDB database, and OCR functionality is integrated using Tesseract.js library.

### Front-end Architecture

The front-end application follows a component-based architecture using React.js. providing modular and reusable styling.

The front-end application interacts with the back-end server through HTTP requests. You can use your preferred library or built-in fetch API for handling the requests.

### Back-end Architecture

The back-end server is built using Node.js and Express.js, providing a RESTful API for the front-end application to interact with. The server handles HTTP requests, processes the uploaded images using Tesseract.js OCR library, and stores the extracted data in a MongoDB database.

The server follows a modular architecture with separate routes and controllers. The routes define the API endpoints and their corresponding handlers, while the controllers handle the business logic for each endpoint. The server connects to the MongoDB database using the MongoDB Node.js driver.

## Backend Packages

The following backend packages are used in the application:

- **express**: Fast, unopinionated, and minimalist web framework for Node.js. It is used to create the backend server and handle HTTP requests.

- **multer**: Middleware for handling multipart/form-data, primarily used for file uploads. It is used to handle file uploads in the `/upload` endpoint.

- **tesseract.js**: OCR (Optical Character Recognition) library for Node.js. It is used to perform OCR on the uploaded marksheet images and extract text data.

- **sharp**: High-performance image processing library for Node.js. It is used to convert the uploaded image to PNG format.

- **path**: Node.js module for working with file paths. It is used to manipulate file paths in the backend.

- **fs**: Node.js module for working with the file system. It is used to delete uploaded and converted image files.

- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express.js server. It allows the front-end application to make requests to the backend from a different origin.

- **mongodb**: Official MongoDB driver for Node.js. It provides a high-level API for interacting with the MongoDB database.

- **dotenv**: Zero-dependency module for loading environment variables from a .env file. It is used to load environment-specific configurations such as database connection URI.

These packages are essential for handling file uploads, performing OCR, manipulating images, managing the database connection, and handling HTTP requests in the backend server.

Make sure to install these packages by running `npm install` before starting the backend server.

### Database Architecture

The project uses MongoDB as the database for storing marksheet data. MongoDB is a NoSQL document database that provides flexibility and scalability. The marksheet data is stored as JSON documents in a collection. The roll number field is indexed to ensure uniqueness and improve query performance.

### OCR Integration

OCR (Optical Character Recognition) functionality is integrated into the project using the Tesseract.js library. Tesseract.js is an open-source OCR engine that can recognize text from images. It is used to extract the required data from the uploaded marksheet images.

## Setup and Installation

To set up the Frontend locally, follow these steps:

1. Clone the repository: `git clone https://github.com/hthimz/kyro-fe.git`
2. Install dependencies: `npm install`
3. Start the front-end application: `npm start`
4. Access the application in your browser at `http://localhost:1234`


## Setup and Installation

To set up the Backend locally, follow these steps:

1. Clone the repository: `git clone https://github.com/hthimz/kyro-be.git`
2. Install dependencies: `npm install`
3. add variables into .env file (MONGO_URI, DB, COLLECTION)
3. Start the front-end application: `node index.js`
4. Access the application in your browser at PORT=`8000`

