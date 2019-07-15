# Zenn Inventory

ZENN Inventory is a multi-channel inventory control app that provides a centralized inventory database for e-commerce businesses selling on multiple retail platforms.  Without the appropriate management app, a business can easily lose sales from depleted stocks, waste money stocking products that no one wants, and miss opportunities to offer the products that customers are most excited about.  ZENN Inventory is built with a MERN stack and connects to various online storefront APIs, stores the product inventory in a MongoDB, and displays the product information in a polish, dynamic table using ag-Grid. The app also provides a dashboard of business summary so owners can focus on the growth of the business.  “ZENN Inventory. Be at one with your inventory!”

## Instructions
Navigate to https://zenninventory.herokuapp.com and click on the "Sign in with Google" button.  The app will start at the Dashboard where the summary of the business inventory is displayed.  If you want to view the API calls in progress, first click on the "Clear Database" button to empty the inventory, then click on the "Manual Etsy API Call" button to retrieve all the products from Etsy. To view the entire inventory, click on the side nav for "Inventory".  Similar to Excel, the grid's headers are expandable by clicking on it and dragging to the size you want.  You can also click on each header to sort by increasing/decreasing/reset with successive clicks. To filter any columns, click on the hamburger menu on the right side of the column to filter by keywords. Since the grid is pinned, use two-fingers (on Macs) to slide the grid to view more info hidden on the right side.  Click on the URL to open a new browser tab for the linked document of the specific product/item. Lastly, type on the Quick Filter field to narrow your search display dynamically.  To view the inventory in card format, click on the side nav for "Product Details".  The title of each product will also open a new browser tab for the linked document of the specific product/item.

## Download/Clone App to Run Locally
If you wish to clone or download the code from GitHub to run on the localhost for your own use, make sure you use bash/terminal and type `npm install` to download the required node modules.  Make sure MongoDB is running on your computer by typing `mongod` in terminal/bash. Next, run the app server.js in node by typing `npm start`, which will start the React app on http://localhost:3000 and the server on http://localhost:3001.  If the browser doesn't automatically load, then open http://localhost:3000 in your browser to run the app.

## Technical overview
This full-stack application utilizes the Model/View/Controller (MVC) design pattern in which the Controller serve as the interface to handle the logic and routing between Model or the application database core and View to dynamically render HTML content in response to the user/client requests. Specifically, the app is built with MERN stack (MongoDB, Express.js, React.js, and Node.js) to handle the logic and to route the client requests to MongoDB database using Mongoose (Object Data Modeling - ODM) to retrive information to dynamically build HTML pages to display the content back to the client.  To run the server codes, the app is deployed live on Heroku with JawsDB remote database.  The user-interface was designed to utilize tab features so that the user can use the features of each tab, such as streaming Spotify music, without the page reloading.

## Built with or topics covered
* Core Technology (HTML5, CSS3, JavaScript)
* jQuery
* Bootstrap
* Model View Controller (MVC)
* Express.js
    * HTTP Requests (GET, POST)
    * Routes and static content
* Node.js
    * Backend API calls
* React.js UI building and templating
* MongoDB - NoSQL Database
* Mongoose - Object Data Modeling
* Node Package Manager (npm)
* Etsy API
* ag-Grid
* Passport.js
* Font Awesome
* Media queries
* Git version control
* GitHub repository
* JawsDB - Database-as-a-Service (DBaas)
* Heroku deployment

## npm packages: 
* [Express] (https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node to handle routing.
* [axios] (https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js.
* [ag-grid-react] (https://www.npmjs.com/package/ag-grid-react) - ag-Grid is a fully-featured and highly customizable JavaScript data grid. It delivers outstanding performance, has no 3rd party dependencies and integrates smoothly with React as React Component.
* [passport] (https://www.npmjs.com/package/passport) - Passport is Express-compatible authentication middleware for Node.js.
* [DotEnv] (https://www.npmjs.com/package/dotenv) - Dotenv store your sensitive credentials and load in environment variables in .env file to merge into your process.env runtime variables. :closed_lock_with_key:


## Team Effort
This full-stack app is developed by Eddie Chiang, Zachary Paulson, Nicolle Chamberlain, Nathaniel Jones, and Michael Garcia.
* Eddie was responsible for writing the front-end code using React.js, Etsy JSON-P API calls, API POST Routes to send new data to MongoDB, API GET routes for retriving inventory data from MongoDB, and rendering of product cards and table using ag-Grid.
* Zachary was responsible for user authentication using Passport.js with Google authentication.
* Nicolle was responsible setting up the multi-channel API accounts from her business (Silver and Gold Gallery) and assisting with static page rendering with React.js.
* Nate was responsible for eBay API which utilized OAuth and webtokens.
* Michael assisted with Etsy API.

## Links
* Click on the deployed app on Heroku!
https://zenninventory.herokuapp.com/

* Click on the GitHub link to view code!
https://github.com/echiang73/Zenn_Inventory


## Here is the preview of the web application:

![](client/src/components/assets/webpreview.gif "gif")