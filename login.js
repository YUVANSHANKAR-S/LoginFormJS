const verifyUserData = async (data) => {
  const response = await fetch("http://localhost:8000/verifyUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  return {
    data: resData,
    status: response.status,
  };
};

const handleOnload = () => {
  const submitBtn = document.getElementById("loginBtn");

  submitBtn.addEventListener("click", async () => {
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    if (email.value && pass.value) {
      const userData = {
        Email: email.value,
        password: pass.value,
      };

      const response = await verifyUserData(userData);

      if (response.status === 200) {
        localStorage.setItem("userId", response.data.id);
        window.location.href = "dashboard.html";
      }
      alert(response.data.message);
    } else {
      alert("fill the input field");
    }
  });
};

window.onload = () => {
  handleOnload();
};
