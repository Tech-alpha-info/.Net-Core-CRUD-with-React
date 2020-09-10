export const URL = "https://localhost:44396/api/customer/"

export const formValid = (customer) => {  
    if(customer.CusName.length > 0 
        && customer.CusEmail.length > 0
        && customer.CusDOB.length > 0
        && customer.CusAddress.length > 0
        && customer.CusContact.length > 0
        ) { 
            return true
    } else {
        alert("Please enter form inputs.");
        return false;
    }
}  
