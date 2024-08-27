import Toastify from 'toastify-js'
export const toast = (text, mode = "error") => {
    Toastify({
      text,
      duration: 2000,
      close: true,
      position : "center",
      style: {
        background: mode === "success" ? "green" : "red",
        fontSize: "16px",
        fontWeight: "600",
        borderRadius: "10px",
      },
    }).showToast();
  };