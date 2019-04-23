# Loggin'

## Setup

* `npm install`
* `npm run start:dev`
* Open another terminal window; from there, `npm run seed` to seed the database

## Assignment - modify the store so a user can login and logout of application

* relevant api calls are:
  - GET /auth - returns a logged in user or a 401
  - POST /auth - stores user in session with correct credentials and returns user or returns 401 with incorrect credentials
  - DELETE /auth - removes user from session

* you should be able to accomplish this with three thunks, each one calling a different endpoint listed above.
  - login - makes the post request
  - sessionLogin - makes get request
  - logout - makes delete request

* you should only need one action creator which sets the user
  - a non logged in user should be an empty object
  - a logged in user should be the user returned by the server

* if the user submits bad credentials logging in, display an error message.

* hints
  - you should only need to change code in the client folder
  - the store should contain your three thunks
  - the Main component should attempt the sessionLogin thunk when mounted
  - the login component should attempt the login thunk when the submit button is clicked. You will need this to be a stateful component.
  - the user-page component should call the logout thunk when the logout button is clicked
  - you shouldn't need the history object as the routes are determined by the redux state.
