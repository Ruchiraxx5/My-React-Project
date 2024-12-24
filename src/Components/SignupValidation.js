//The rules for validating user sign up inputs.
function Validation(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid'; 
    }
  
    if (!values.password) {
      errors.password = 'Password is required';  //This message is displayed when the user has clicked on submit but the input is empty.
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';  //The constraints added on the password length.
    }
  
    return errors;
  }
  
  export default Validation;
  