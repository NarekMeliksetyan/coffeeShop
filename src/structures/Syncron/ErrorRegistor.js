const ErrorRegistor = (data,dataFetch) => {
    let errors = {};

    if (!data.firstName) {
        errors.firstName="First name is required"
    }
    if (!data.lastName) {
        errors.lastName="Last name is required"
    }
    if (!data.Email) {
        errors.Email="Email  is required"

    } else if (!/\S+@\S+\.\S+/.test(data.Email)) {
        errors.Email="Email is invalid"
    }
    if (!data.password) {
        errors.password="password is invalid"
    } else if(data.password.length < 6) {
        errors.password = "Password must be more than six characters"
    }
    if (data.retryPassword !== data.password) {
         errors.retryPassword="pasword no smoot..."
    }
    if (!data.phone) {
        errors.phone="Phone is required"
    }
    if (!data.adress) {
        errors.adress="adress is required"
    }
    
    dataFetch.filter( item => {
        if ( data.Email === item.Email) {
            errors.Email = "email asdasfjasdfjjkm"
    } } ) 
        
    return errors;
}

export default ErrorRegistor;