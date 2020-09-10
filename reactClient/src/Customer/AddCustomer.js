import React from 'react';  
import '../Customer/AddCustomer.css'  
import { formValid } from '../Customer/Constants'  
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';  
import { connect } from 'react-redux';
import { AddAction } from './Actions';


class AddCustomer extends React.Component{  

    constructor(props){  
    super(props)  
        this.state = {  
        CusName:'',  
        CusContact:'',  
        CusEmail:'',  
        CusDOB:'',
        CusAddress:''
        }  
}   

Addcustomer = () => {  

    const obj = {  
        CusName: this.state.CusName,  
        CusContact: this.state.CusContact,  
        CusDOB: this.state.CusDOB,  
        CusEmail: this.state.CusEmail,  
        CusAddress: this.state.CusAddress  
    };  
    
    if(formValid(obj)) {
        this.props.dispatch(AddAction(obj))
        this.props.history.push('/Customerlist');  
   } 
}  



    formValid() {  
        if(this.state.CusName.length > 0 
            && this.state.CusEmail.length > 0
            && this.state.CusDOB.length > 0
            && this.state.CusAddress.length > 0
            && this.state.CusContact.length > 0
            ) { 
                return true
        } else {
            alert("Please enter form inputs.");
            return false;
        }
    }  


    handleChange= (e)=> {  
        this.setState({[e.target.name]:e.target.value});
    }  


    render() {  
    return (  
    <Container className="App">  
        <h4 className="PageHeading">Enter Customer</h4>  
        
        <Form className="form">  
        <Col>  
            <FormGroup row>  
            <Label for="name" sm={2}>Name</Label>  
            <Col sm={10}>  
                <Input type="text" name="CusName" onChange={this.handleChange} value={this.state.CusName} placeholder="Enter Name" />  
            </Col>  
            </FormGroup>  
            <FormGroup row>  
            <Label for="address" sm={2}>Contact</Label>  
            <Col sm={10}>  
                <Input type="text" name="CusContact" onChange={this.handleChange} value={this.state.CusContact} placeholder="Enter RollNo" />  
            </Col>  
            </FormGroup>  
            <FormGroup row>  
            <Label for="CusEmail" sm={2}>Email</Label>  
            <Col sm={10}>  
                <Input required  type="email" name="CusEmail" onChange={this.handleChange} value={this.state.CusEmail} placeholder="Enter Email" />  
            </Col>  
            </FormGroup>  
            <FormGroup row>  
            <Label for="CusAddress" sm={2}>Address</Label>  
            <Col sm={10}>  
                <Input type="text" name="CusAddress" onChange={this.handleChange} value={this.state.CusAddress} placeholder="Enter Address" />  
            </Col>  
            </FormGroup>  
            <FormGroup row>  
            <Label for="CusDOB" sm={2}>DOB</Label>  
            <Col sm={10}>  
                <Input type="date" name="CusDOB" onChange={this.handleChange} value={this.state.CusDOB} placeholder="Enter DOB" />  
            </Col>  
            </FormGroup>  
        </Col>  
        <Col>  
            <FormGroup row>  
          
                        <Col sm={3}>  
                            </Col>  
                            <Col sm={3}>  
                                 <button type="button" onClick={this.Addcustomer} className="btn btn-success">Submit</button>  
          
                            </Col>  
                            <Col sm={3}>  
                                <a href="/customerList" className="btn btn-danger">Cancel</a>
                              
                            </Col>  
                            <Col sm={3}>  
                            </Col>  
            </FormGroup>  

        </Col>  
        </Form>  
    </Container>  
    );  
    }  
}  


export default connect()(AddCustomer);