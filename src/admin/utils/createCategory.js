const createCategory = (name,setReload, setSuccess, setError, onResetForm) => {
    const data = {
      name
    };

    fetch(`${import.meta.env.VITE_API_URL}/category/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true)
          onResetForm();
          setReload(true)
          setTimeout(() => {
          setSuccess(false)
          }, 5000);
        } else {
          console.error("Error en la solicitud POST");
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  export default createCategory