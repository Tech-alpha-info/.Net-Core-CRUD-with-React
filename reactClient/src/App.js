import React from 'react';  
import AddCustomer from './Customer/AddCustomer';  
import CustomerList from './Customer/CustomerList';  
import EditCustomer from './Customer/EditCustomer';  
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  
import './App.css';  
import {Navbar, Nav } from 'react-bootstrap';


function App() {  
  
  return (  
    <Router>  

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React Customers DB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/AddCustomer">Add Customer</Nav.Link>
            <Nav.Link href="/CustomerList">Customer List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">  
        <br />  
        <Switch>  
          <Route exact path='/AddCustomer' component={AddCustomer} />  
          <Route path='/edit/:id' component={EditCustomer} />  
          <Route path='/Customerlist' component={CustomerList} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
export default App;