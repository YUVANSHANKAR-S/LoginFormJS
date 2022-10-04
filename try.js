let button = document.getElementById("button");

let formValidate = (datas) => {
  let error = {};
  for (const form of datas) {
    if (form.value === "" && !form.value) {
      error[form.Name] = form.element;
    } else {
      delete error[form.Name];
      form.element.classList.remove("error");
    }
  }

  for (const errorFind of Object.keys(error)) {
    error[errorFind].classList.add("error");
  }

  return Object.keys(error).length === 0;
};

button.addEventListener("click", () => {
  let Name = document.getElementById("Name");
  let password = document.getElementById("password");

  let createObject = {
    Name: Name.value,
    password: password.value,
  };

  let seperate = [];
  for (const formData of Object.keys(createObject)) {
    const seperateObject = {
      Name: formData,
      value: createObject[formData],
      element:
        formData === "Name" ? Name : formData === "password" ? password : null,
    };
    seperate.push(seperateObject);
  }

  let validate = formValidate(seperate);
  if (validate) {
    let users = [createObject];
    let stringy = JSON.stringify(users);
    let previousData = localStorage.getItem("userData");

    if (previousData && JSON.stringify(previousData)) {
    }
    localStorage.setItem("userData", JSON.stringify(createObject));
    console.log(JSON.parse(localStorage.getItem("userData")));
  }
});
