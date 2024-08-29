export function formValidation(children) {
  if (validateEmail() !== "" || validatePassword() !== "") {
    children[4].classList.remove("!bg-appBlack");
    children[4].classList.add("!bg-appBlack/65");
    children[4].disabled = true;
    children[0].children[0].src = "public/login/user-sign.svg";
    children[1].children[0].src = "public/login/pass-sign.svg";
    children[1].children[2].src = "public/login/eye-hide.svg";
  } else {
    children[4].disabled = false;
    children[4].classList.remove("!bg-appBlack/65");
    children[4].classList.add("!bg-appBlack");
    children[0].children[0].src = "public/login/user-sign-black.svg";
    children[1].children[0].src = "public/login/pass-sign-black.svg";
    children[1].children[2].src = "public/login/eye-hide-black.svg";
  }
  function validateEmail() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const firstChild = children[0];
    if (emailRegex.test(firstChild.children[1].value)) {
      return (children[3].innerText = "");
    } else {
      return (children[3].innerText = "Please enter a valid email address. (example@gmail.com)");
    }
  }
  function validatePassword() {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const secondChild = children[1];
    if (passwordRegex.test(secondChild.children[1].value)) {
      return (children[3].innerText = "");
    } else {
      return (children[3].innerText =
        "password should be 8 character and includes uppercase , lowercase , numbers and signs.");
    }
  }
}
