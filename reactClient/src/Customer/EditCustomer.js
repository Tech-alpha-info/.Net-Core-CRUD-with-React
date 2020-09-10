import React from 'react';   
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';   
import '../Customer/AddCustomer.css'  
import {  formValid } from '../Customer/Constants'  
import { connect } from 'react-redux';
import { EditAction } from './Actions';

class EditCustomer extends React.Component {  

    constructor(props) {  
        
        super(props)  
        this.onChangeName = this.onChangeName.bind(this);  
        this.onChangeContact = this.onChangeContact.bind(this);  
        this.onChangeEmail = this.onChangeEmail.bind(this);  
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onSubmit = this.onSubmit.bind(this);  
        this.state = {  
                CusName:'',  
                CusContact:'',  
                CusEmail:'',  
                CusDOB:'',
                CusAddress:'',
                CusId: parseInt(this.props.match.params.id)   
            }  
    }

  componentDidMount() {  
    const customer = this.props.customer[0];

    this.setState({   
        CusName: customer.cusName,   
        CusContact: customer.cusContact,  
        CusEmail: customer.cusEmail,  
        CusDOB: customer.cusDOB,  
        CusAddress: customer.cusAddress });  
    }  

    onChangeName(e) {  
        this.setState({  
            CusName: e.target.value  
        });  
    }  

    onChangeContact(e) {  
        this.setState({  
            CusContact: e.target.value  
        });    
    }  

    onChangeEmail(e) {  
        this.setState({  
            CusEmail: e.target.value  
        });  
    }  
    onChangeAddress(e) {  
            this.setState({  
                CusAddress: e.target.value  
            });  
    }  

    onChangeDOB(e) {  
        this.setState({  
            CusDOB: e.target.value  
        });  
    }  

  onSubmit(e) {  
    e.preventDefault();  
          
    const obj = {  
        CusId: parseInt(this.props.match.params.id) ,  
        CusName: this.state.CusName,  
        CusContact: this.state.CusContact,  
        CusDOB: this.state.CusDOB,  
        CusEmail: this.state.CusEmail,  
        CusAddress: this.state.CusAddress  
    };  
    
    if(formValid(obj)) {
        this.props.dispatch(EditAction(obj))
        this.props.history.push('/Customerlist');  
    }
  }  


    render() {  
        return (  
            <Container className="App">  
             <h4 className="PageHeading">Update Customer Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                    <FormGroup row>  
                            <Label for="CusId" sm={2}>ID</Label>  
                            <Col sm={10}>  
                                   
                                    <Input type="text" disabled="true" readonly value={this.state.CusId} className="" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="CusName" sm={2}>Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="CusName" value={this.state.CusName} onChange={this.onChangeName}  
                                placeholder="Enter Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="CusContact" sm={2}>Contact</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="CusContact" value={this.state.CusContact} onChange={this.onChangeContact} placeholder="Enter CusContact" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="CusDOB" sm={2}>DOB</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="CusDOB" value={this.state.CusDOB} onChange={this.onChangeDOB} placeholder="Enter DOB" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="CusAddress" sm={2}>Address</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="CusAddress"value={this.state.CusAddress} onChange={this.onChangeAddress} placeholder="Enter Address" />  
                            </Col>  
                        </FormGroup>   
                        <FormGroup row>  
                            <Label for="CusEmail" sm={2}>Email</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="CusEmail"value={this.state.CusEmail} onChange={this.onChangeEmail} placeholder="Enter Email" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={3}>  
                            </Col>  
                            <Col sm={3}>  
                                <Button type="submit" color="success">Submit</Button>{' '}  
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


  
const mapStateToProps = (state, ownProps)  => ({
    customers: state.customers.items,
    customer:  state.customers.items.filter((customer) => customer.cusId === parseInt(ownProps.match.params.id)), 
  });


export default connect(mapStateToProps)(EditCustomer);