import { removeSessionToken } from "./session-manager";
import { toast } from "./toast";

export const errorHandler = (error: IError):void => {
  const message = error.response?.data?.message;
  if (typeof message === "string") {
    toast(message);
  } else if (Array.isArray(message)) {
    for (const msgText of message) {
      toast(msgText);
    }
  }
  const statusCode: number = Number(error.response?.data?.statusCode || 0);
  if (statusCode === 403) {
    toast("Please login again");
    removeSessionToken();
    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  }
};
