import { formValidation } from "./libs/form-validation";
import { signup } from "./apis/services/auth-service";
import { setSessionToken } from "./libs/session-manager";
import { toast } from "./libs/toast";
import { errorHandler } from "./libs/error-handler";
let form = <HTMLFormElement>document.getElementById("form");

form.addEventListener("keyup", () => {
  formValidation(form.children);
});
form.children[1].children[2].addEventListener("click", () => {
  const input = <HTMLInputElement>form.children[1].children[1];
  const eye = <HTMLImageElement>form.children[1].children[2];
  if (input.type === "password") {
    input.type = "text";
    eye.src = "public/login/eye-show.svg";
  } else {
    input.type = "password";
    eye.src = "public/login/eye-hide-black.svg";
  }
});
form.addEventListener("submit", (event : SubmitEvent) : void=>{logIn(event)});
async function logIn(event:SubmitEvent) {
    event.preventDefault();
  const formData :FormData = new FormData(form);
  const username = <string>formData.get("userName");
  const password = <string>formData.get("password");
  try {
    // {username ,password} means username : username , password :password
    const response : ISneakerAuthDto = await signup({username ,password});
    setSessionToken(response.token);
    toast("Signup successfull","success");
    setTimeout(() => {
        window.location.href = "/home";
      }, 2000);
  } catch (error) {
    errorHandler(error as IError);
  }
}