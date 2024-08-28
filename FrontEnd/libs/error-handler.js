import { toast } from "./toast";


export const errorHandler = (error)=>{
    const message = error.response?.data?.message;
    if (typeof message === "string") {
      toast(message);
    } else if (Array.isArray(message)) {
      for (const msgText of message) {
        toast(msgText);
      }
    }
}