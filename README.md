## Accenture Song – Project Square Full Stack Developer Challenge 

This is React Application 

At the creation of this Project Node v18, Next v13.4.3, React v18.2.0, Typescript v5.0.4 and Tailwind v3.3.2 were used

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Installation

Follow these steps to set up and run the project locally:

 **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/project-name.git
   ```

Navigate into the project directory:

```bash
cd project-name
```

To Install the project dependencies run, 

```bash
npm install
# or
yarn install 
```
First, run the development server:

```bash
npm run dev
# or
yarn dev 
```


## Usage

Once the server is running, you can access the project in your browser at http://localhost:3000 and start interacting with it.

Main Features
Responsive Design: The layout is optimised for both mobile and desktop devices.  
Tailwind CSS: Used for styling, with custom fonts and themes applied.  
Font Customisation: Custom fonts such as Inter  are used for styling.  
Smooth Scroll: Smooth scroll behavior for a better user experience.

### Database Setup
To restore the database and get the full functionality of this application, follow these steps:

1. Install PostgreSQL
Ensure PostgreSQL is installed on your system. If not, install it using:

Ubuntu/Linux:
```bash
sudo apt update && sudo apt install postgresql postgresql-contrib
```
MacOS (Homebrew):
```bash
brew install postgresql
```
Windows:

Download and install PostgreSQL from https://www.postgresql.org/download/.


2. Create a New Database
Run the following command to create a new database:

```bash
createdb -U your_username your_database_name
```

3. Restore the Database
Run the following command to restore the database from the provided dump file:

```bash
pg_restore -U postgres -d brandsdb database/database_backup.sql
```

4. Set Up the .env File
Create a .env file in the root of your project and configure your database credentials:


DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=
DB_NAME=brandsdb


5. Run the Application
Start the backend server using:

```bash
node server.js
```
Once done, your application should be able to connect to the database.

## Technologies
This project uses the following technologies:

Frontend:

React
Tailwind CSS  
TypeScript   
Custom Fonts (Inter)

Backend:

Node.js 
Express.js 


Database:
Postgres

## License
This project is licensed under the MIT License.




