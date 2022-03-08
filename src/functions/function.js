const showToast = (message, type) => {
  type(message, {
    position: "top-left",
    autoClose: 6000,
    hideProgressBar: true,
    closeOnClick: true,
    theme: "colored",
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export { showToast };
