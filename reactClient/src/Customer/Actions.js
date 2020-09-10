import axios from 'axios';  
import { URL } from '../Customer/Constants'  


export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const LIST_CUSTOMER = "LIST_CUSTOMER";
export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


  export const fetchBegin = () => ({
    type: FETCH_BEGIN
  });
  
  export const fetchSuccess = data => ({
    type: FETCH_SUCCESS,
    payload: { data }
  });
  
  export const fetchFailure = error => ({
    type: FETCH_FAILURE,
    payload: { error }
  });

  export const editSuccess = data => ({
    type: EDIT_CUSTOMER,
    payload: { data },
  });
  
  export const addSuccess = data => ({
    type: ADD_CUSTOMER,
    payload: { data },
  });

  
  export const deleteSuccess = id => ({
    type: DELETE_CUSTOMER,
    payload: { id },
  });



  export function RefreshList() {
      return dispatch => { 

          dispatch(fetchBegin());
          return axios.get(URL)  
              .then(response => {  
                  dispatch(fetchSuccess(response.data));
                      return response.data;
      })  
      .catch(error => dispatch(fetchFailure(error))); 
      }; 
    }

    

  export function EditAction(obj) {
      return dispatch => { 
        
          return axios.post(URL + 'PutCustomer/', obj)  
          .then(json => {  
            
              if(json.data.status === 'Saved') {  
                  dispatch(editSuccess(obj));
                  alert("Customer Saved Successfully");    
                  return obj; 
              }  
              else{  
                  alert('Customer not Saved');  
                  return null;
              }
          })  
        }
      }


      

  export function AddAction(obj) {
    return dispatch => { 
            
            axios.post(URL + 'Post/',  obj)   
            .then(json => {  

                if(json.data.status === 'Added') {  
                    dispatch(addSuccess(obj));
                    alert("Customer Added Successfully");    
                }  
                else{  
                    alert('Customer not Saved ' + json.data.message);  
                }
            })
            .then(json => {
              dispatch(RefreshList());  
             })  
        } 
      }

      
  export function DeleteAction(id) {
    return dispatch => { 

      axios.delete(URL + 'Delete?id=' + id)  
      .then(json => {  
        
        if(json.data.status === 'Delete') {  
          dispatch(deleteSuccess(id));
      
        } else {
          alert('Record could not be deleted');  
        }
      }
    )
    .then(json => {
      return Promise.resolve();   
    })
  }  
}