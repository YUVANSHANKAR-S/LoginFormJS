let register = document.getElementById("register");

const validateForm = (formData) => {
  let error = {};
  for (const form of formData) {
    if (!form.value && form.value === "") {
      error[form.key] = form.element;
    } else {
      delete error[form.key];
      form.element.classList.remove("errorField");
    }
  }

  for (const key of Object.keys(error)) {
    error[key].classList.add("errorField");
  }
  return Object.keys(error).length === 0;
};

register.addEventListener("click", async () => {
  let Name = document.getElementById("name");
  let Email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");

  let createObj = {
    Name: Name.value,
    Email: Email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };
  const buildForm = [];
  for (const formKey of Object.keys(createObj)) {
    const formObj = {
      key: formKey,
      value: createObj[formKey],
      element:
        formKey === "Name"
          ? Name
          : formKey === "Email"
          ? Email
          : formKey === "password"
          ? password
          : formKey === "confirmPassword"
          ? confirmPassword
          : null,
    };
    buildForm.push(formObj);
  }

  const validForm = validateForm(buildForm);
  if (validForm) {
    if (Object.keys(createObj).length) {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createObj),
      });
      const resData = await response.json();
      alert(resData.message);
    }
  }
});
