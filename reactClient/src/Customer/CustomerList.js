import React, { Component } from 'react';   
import Table from './Table';  
import { connect } from 'react-redux';
import { RefreshList } from './Actions';


class CustomerList extends Component {  

  constructor(props) {  
      super(props);  
      this.RefreshList = this.RefreshList.bind(this)
    }  

    
    componentDidMount(){  
      this.RefreshList()
    }  

    RefreshList() {
      this.props.dispatch(RefreshList()); 
    }


    tabRow(refreshFunc, customers){  
      return customers.map(function(object, i){  
          return <Table obj={object} key={i} RefreshList = {refreshFunc} />;  
      });  
    }  

    render() {  
      const { error, loading, customers } = this.props;

      if (error) {
        return <div>Error! {error.message}</div>;
      }

      if (loading) {
        return <div>Loading...</div>;
      }

      return (  
        <div>  
          <h4 align="center">Customer List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>ID</th>
                <th>Name</th>  
                <th>Email</th>  
                <th>Address</th>  
                <th>DOB</th>  
                <th colSpan="4"></th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow(this.RefreshList, customers) }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
    
  }

  
  const mapStateToProps = state => ({
    customers: state.customers.items,
    loading: state.customers.loading,
    error: state.customers.error
  });




export default connect(mapStateToProps)(CustomerList);