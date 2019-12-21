// Form validate
function formValidate() {
  // Stores in variable a reference to the form
  let form = document.contact;

  // Stores in form fields
  let fName = form.firstName;
  let lName = form.lastName;
  let email = form.email;
  let tel = form.telephone;

  // Checks if fields are null and does not post request
  if (fName.value == "") {
    alert("First name field must not be empty");
    return false;
  }

  if (lName.value == "") {
    alert("Last name field must not be empty");
    return false;
  }

  if (
    email.value == "" ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1
  ) {
    alert("Enter a valid e-mail");
    return false;
  }

  if (tel.value == "") {
    alert("Telephone field must not be empty");
    return false;
  }

  return true;
}

// Phone field validation with regex
function validatePhone(value) {

  // An object with replace and regex methods
  const mask = {
    telephone(data) {
      return data
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "($1) $2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(-\d{4})(\d+?)$/, "$1");
    }
  };

  // Iteration in the telephone field, where changes within the field are heard
  document.querySelectorAll("input").forEach($input => {
    // Variable that stores the input reference
    const field = $input.dataset.js;

    // Time when data is captured in input and 
    // passed in parameter to object method
    $input.addEventListener(
      "input",
      e => {
        e.target.value = mask[field](e.target.value);
      },
      false
    );
  });
  return value;
}