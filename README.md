# pfsinterns-ecommerce
This repository consists of my ecommerce project which i completed during my internship tenure of 1 month at Pinnacle Full-Stack Interns.

Installation
Clone the Repository:


git clone https://github.com/AjinkyaDahiwal/pfsinterns-ecommerce.git
cd pfsinterns-ecommerce
Install Dependencies:

For the backend (Express server):

Copy code -> npm install

For the frontend (React app):

Copy code -> cd client then write npm install


Setting up Environment Variables
Backend Environment Variables:

In the root directory (where server.js is located), create a .env file and add the following content:

PORT=8080
DEV_MODE=development
MONGO_URL=
JWT_SECRET=ASDKJFHAKNCKJXS
BRAINTREE_MERCHANT_ID=
BRAINTREE_PUBLIC_KEY=
BRAINTREE_PRIVATE_KEY=
Frontend Environment Variables:

In the client directory, create a .env file and add the following content:

REACT_APP_API=http://localhost:8080



Running the Application
Start the Server:

In the root directory, run the following command to start the Express backend and the React frontend concurrently (assuming you've set up a script for that in package.json):


Copy code -> npm run dev



Alternatively, you can start them separately:

Start the Backend (Express server):


Copy code -> npm run server

Start the Frontend (React app):


Copy code -> cd client then write npm start


Accessing the Application
Frontend: Go to http://localhost:3000 to view the React app.
Backend API: Your API will be running on http://localhost:8080.

Additional Notes
Make sure your MongoDB connection is correct in the .env file. If using MongoDB Atlas, replace the credentials with your own.
If you're using services like Braintree for payments, ensure the API keys and credentials in the .env files are valid.

