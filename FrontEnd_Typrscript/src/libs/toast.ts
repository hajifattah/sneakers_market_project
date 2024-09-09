import Toastify from "toastify-js";
type Tostify = (text: string, mode: string) => void;
export const toast :Tostify = (text, mode = "error") => {
  Toastify({
    text,
    duration: 4000,
    close: true,
    position: "center",
    style: {
      background: mode === "success" ? "green" : "red",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "10px",
    },
  }).showToast();
};
