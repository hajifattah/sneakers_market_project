
import { login } from "../apis/services/auth-service";
import { errorHandler } from "../libs/error-handler";
import { formValidation } from "../libs/form-validation";
import { setSessionToken } from "../libs/session-manager";
import { toast } from "../libs/toast";
let form = document.getElementById("form");

form.addEventListener("keyup", () => {
  formValidation(form.children);
});
form.children[1].children[2].addEventListener("click", () => {
  const input = form.children[1].children[1];
  if (input.type === "password") {
    input.type = "text";
    form.children[1].children[2].src = "public/login/eye-show.svg";
  } else {
    input.type = "password";
    form.children[1].children[2].src = "public/login/eye-hide-black.svg";
  }
});
form.addEventListener("submit", (event)=>{logIn(event)});
async function logIn(event) {
    event.preventDefault();
  const formData = new FormData(form);
  const username = formData.get("userName");
  const password = formData.get("password");
  try {
    // {username ,password} means username : username , password :password
    const response = await login({username ,password});
    setSessionToken(response.token);
    toast("Login successfull","success");
    setTimeout(() => {
        window.location.href = "/home";
      }, 2000);
  } catch (error) {
    errorHandler(error);
  }
}
