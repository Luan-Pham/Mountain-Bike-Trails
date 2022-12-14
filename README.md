# Mountain-Bike-Trails
## User Story:
* As a user, I would like to search for trails based on several factors
* I want to search by location, weather, the difficulty, and the views
* I want to login into an account to leave my personal review of the trails
* So that I can find trails that are near me and match my hiking abilities and let others read my experiences with each trail

## Acceptance Criteria:

* Use Node.js and Express.js to create a RESTful API.
* Use Handlebars.js as the templating engine.
* Use MySQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Be deployed using Heroku (with data).
* Use at least one new library, package, or technology that we haven’t discussed.
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Link to Presentation: 
* https://docs.google.com/presentation/d/1auKVBEREXz0XZ8sus2KnRq4VerzT4-vH6X4uO4V2SxM/edit#slide=id.p

## Link to Heroku: 
* https://possessed-web-11287.herokuapp.com/ 

## Link to Github: 
* https://github.com/Luan-Pham/Mountain-Bike-Trails

## Screenshot of Deployed Application:
<img width="1181" alt="Screen Shot 2022-09-29 at 7 08 05 PM" src="https://user-images.githubusercontent.com/106893601/193176288-739ff414-f852-442d-b5ec-06059b929508.png">

## To host the application locally: 
* First, clone the repo. 
* Then install the Node dependencies: npm install
* Populate the .env file with your MySQL credentials:
* DB_NAME='bikeroute_db'
* DB_USER='<username_goes_here>'
* DB_PASSWORD='<password_goes_here>'
* Source the MySQl schema:
* mysql -u root -p
* SOURCE ./db/schema.sql;
* exit;
* Seed the database locally:
* npm run seed
* To start the App:
* npm star
