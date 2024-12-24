//The rules for validating user Login inputs.
function Validation(values) {
  let error = {};
  const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (values.email === "") {
    error.email = "Email should not be empty"; //Error message is displayed when the email is empty.
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";  //Error message when an email does not match with the one that is stored in the database.
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty"; //Error message is displayed when the password is empty.
  } else {
    error.password = "";
  }

  return error;
}

export default Validation;

