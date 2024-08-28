# Dolce Bakers

Dolce Bakers is a web application designed to manage bakery products, orders, and user authentication. The project features a product management system, order processing, and secure user login and signup functionality.

## Features

- **Product Management**: Add, edit, and delete bakery products with details like title, description, price, and image.
- **Order Handling**: Users can order products, and orders are displayed with the user's username and email.
- **User Authentication**: Secure login and signup with validation for username, email, and password.

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **API**: Axios for API requests

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB set up and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Githu77/dolce-bakers.git
Navigate to the project directories and install dependencies:

2. 
    ```bash 
    cd frontend
    npm install

3. cd ../backend
    npm install
    Set up environment variables in a .env file in the backend:


4. MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    Start the frontend and backend servers:

5. ```bash
# Start frontend
    cd frontend
    npm start

# Start backend
    cd ../backend
    npm run dev