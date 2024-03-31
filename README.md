# Property Selling Marketplace Backend API

This repository contains the backend API for a Property Selling Marketplace built using MongoDB, Node.js, and Express.js.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Live Link](#live-link)


## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Configure your MongoDB connection in `config.js`.
5. Run `npm start` to start the server.

## Usage

This backend API provides endpoints to manage properties, users, and transactions for a property selling marketplace. 
You can integrate this API with your frontend application to enable property listing, searching, buying, and selling functionalities.

## API Endpoints

- **POST /api/user/signUp** : Register A new User
- **GET /api/user/login** : Login User
- **GET /api/user/** : Get all User
- **GET /api/user/buy/id** : Buy Property.

- **GET /api/properties/search** : Search by applying filters.
- **PATCH /api/properties/id** : Update Property Info.
- **POST /api/properties/add** : Add Property.
- **DELETE /api/properties/id** : Delete Property.
- **GET /api/properties** : All properties of User.

## LIVE LINK 
  - **Live URL of Backend API** :  https://backend-api-for-a-property-selling.onrender.com
