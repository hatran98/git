let form = document.querySelector("#main-form");
let error = "";
let errorContainer = document.querySelector(".error");
let user = JSON.parse(localStorage.getItem("user"));
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let name = form.fullname.value;
  error = "";
  let nameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  let passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!passRegex.test(password)) {
    error =
      error +
      `Password không hợp lệ!! <br/>
    Password phải có 8 ký tự trở lên...`;
  }
  if (!emailRegex.test(email)) {
    error =
      error +
      `Email không hợp lệ !! <br/>
    Email phải chứa @`;
  }
  if (!nameRegex.test(name)) {
    error = error + `Tên không hợp lệ !!`;
  }
  if (
    emailRegex.test(email) &&
    passRegex.test(email) &&
    nameRegex.test(fullname)
  ) {
    error = "";
  }

  if (error) {
    errorContainer.classList.remove("hide");
    errorContainer.innerHTML = error;
  } else {
    errorContainer.classList.add("hide");
    errorContainer.innerHTML = error;
    let newUser = {
      name: name,
      email: email,
      password: password,
    };
    user.push(newUser);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "http://127.0.0.1:5500/register.html";
  }
});
