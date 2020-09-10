# .Net-Core-CRUD-with-React

Basic CRUD Web API using .net Core for the Server. For the client, I'm using React / Redux for a fast SPA experience.
Displays a grid of data, allows add, edit and delete of records.

# Set up
You'll need .Net Core, Node.js and npm.

The DB is init-ed and created on Startup, but makes use of in memory SQL server express on localhost for the DB.

# To Start the Server
Build and run the VS project in debug, this will load a page of json data in the browser using the exposed Service URL.

Check that this URL for the service is correct in the React client constants file at - src\Customer\Constants.js

To Start the Client and Connect:
At command prompt, run npm install, then npm start. 

# Components used
.NET Core 3.1, React, Redux, Thunk, Axios.

Ag-Grid is a very decent data grid component, check it out here:

https://www.ag-grid.com/javascript-grid-getting-started/
