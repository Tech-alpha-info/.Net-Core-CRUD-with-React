import {
    FETCH_BEGIN,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_CUSTOMER,
    EDIT_CUSTOMER,
    DELETE_CUSTOMER
  } from './Actions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function CustomerReducer(state = initialState, action) {
    switch(action.type) {

      case ADD_CUSTOMER:
    
        return {
          ...state,
          loading: false,
          error: null,
          items: state.items.concat([action.payload.data])
        };

      case DELETE_CUSTOMER:
      
        return {
          ...state,
          loading: false,
          error: null,
          items:  state.items.filter((customer) => customer.cusId !== action.payload.id)
        };
      
      case EDIT_CUSTOMER:

        return {
          ...state,
          loading: false,
          error: null,
          items:   
              state.items.map((customer) => {
              if(customer.cusId === action.payload.data.CusId) {
             
                return {
                  ...customer, 
                  cusName: action.payload.data.CusName,  
                  cusContact: action.payload.data.CusContact,  
                  cusDOB: action.payload.data.CusDOB,  
                  cusEmail: action.payload.data.CusEmail,  
                  cusAddress: action.payload.data.CusAddress,    
                }
              } else return customer;
          })
        };

      case FETCH_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.data
        };
  
      case FETCH_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }
