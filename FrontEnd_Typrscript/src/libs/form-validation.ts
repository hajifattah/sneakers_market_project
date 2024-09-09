export function formValidation(children:HTMLCollection):void {
  const button = <HTMLButtonElement>children[4];
  const img1 = <HTMLImageElement>children[0].children[0];
  const img2 = <HTMLImageElement>children[1].children[0];
  const img3 = <HTMLImageElement>children[1].children[2];
  const error = <HTMLParagraphElement>children[3];
  if (validateEmail() !== "" || validatePassword() !== "") {
    button.classList.remove("!bg-appBlack");
    button.classList.add("!bg-appBlack/65");
    button.disabled = true;
    img1.src = "public/login/user-sign.svg";
    img2.src = "public/login/pass-sign.svg";
    img3.src = "public/login/eye-hide.svg";
  } else {
    button.disabled = false;
    button.classList.remove("!bg-appBlack/65");
    button.classList.add("!bg-appBlack");
    img1.src = "public/login/user-sign-black.svg";
    img2.src = "public/login/pass-sign-black.svg";
    img3.src = "public/login/eye-hide-black.svg";
  }
  function validateEmail():string {
    const emailRegex:RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const firstChild = <HTMLInputElement>children[0].children[1];
    if (emailRegex.test(firstChild.value)) {
      return (error.innerText = "");
    } else {
      return (error.innerText = "Please enter a valid email address. (example@gmail.com)");
    }

  }
  function validatePassword():string {
    const passwordRegex:RegExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const secondChild = <HTMLInputElement>children[1].children[1];
    if (passwordRegex.test(secondChild.value)) {
      return (error.innerText = "");
    } else {
      return (error.innerText =
        "password should be 8 character and includes uppercase , lowercase , numbers and signs.");
    }
  }
}
