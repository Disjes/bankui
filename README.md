# Frontend Project

The **Frontend Project** is a web application that provides a user interface for managing user accounts and their associated transactions. It interacts with the backend API to fetch data, perform CRUD operations, and display the information to the users.

## Features

The frontend project offers the following features:

1. User List: Displays a list of users retrieved from the backend API.
2. Account List: Shows the accounts associated with each user.
3. Add Account: Allows adding a new account to a user.
4. Delete Account: Enables deleting an account from a user.
6. Add Transaction: Allows adding a new transaction to an account.
7. Error Handling: Provides error messages and notifications for failed API requests.

## Technologies Used

The frontend project utilizes the following technologies and frameworks:

- React: A JavaScript library for building user interfaces.
- React Router: Handles routing and navigation within the application.
- fetch: A library for making HTTP requests to the backend API.

## Getting Started

To get started with the frontend project, follow these steps:

1. Clone the repository: `git clone https://github.com/Disjes/bankui.git/'`
2. Install the project dependencies by running: `yarn build`
3. Update the API base URL in the configuration file to point to your backend API.
4. Start the development server: `yarn start`
5. Open your web browser and access the application at `http://localhost:3000`.

## Folder Structure

The frontend project follows a standard folder structure to organize the code:

- `src`: Contains the main source code of the application.
  - `components`: Contains reusable UI components used throughout the application.
  - `pages`: Contains the main pages or views of the application.
  - `App.js`: The main entry point of the application.
