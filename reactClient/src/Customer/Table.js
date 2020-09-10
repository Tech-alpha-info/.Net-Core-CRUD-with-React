import React, { Component } from 'react';  
import { Link } from 'react-router-dom';  
import { connect } from 'react-redux';
import { DeleteAction } from './Actions';


class Table extends Component {  
 
    DeleteCustomer= () => {  
      this.props.dispatch(DeleteAction(this.props.obj.cusId, this.props.refreshList))
    }  

  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.cusName}  
          </td>  
          <td>  
            {this.props.obj.cusContact}  
          </td>  
          <td>  
            {this.props.obj.cusEmail}  
          </td>  
          <td>  
            {this.props.obj.cusAddress}  
          </td>  
          <td>  
            {this.props.obj.cusDOB}  
          </td>  
          <td>  
            <Link to={"/edit/" + this.props.obj.cusId} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteCustomer} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  

export default connect()(Table);

