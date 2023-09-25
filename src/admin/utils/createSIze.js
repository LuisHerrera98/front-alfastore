const createSize = (name, setSuccess, onResetForm, setError, category_id) => {
    const data = {
        name,
        category_id
      };
  
      fetch(`${import.meta.env.VITE_API_URL}/size/create`, {
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
}

export default createSize