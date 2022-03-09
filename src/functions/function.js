const showToast = (message, type) => {
  type(message, {
    position: "top-left",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    theme: "colored",
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export { showToast };
