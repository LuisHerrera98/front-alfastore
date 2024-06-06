const createSell = (name, category_name, cost, price, image, size_name, method_payment) => {
    const data = {
        name, category_name, cost, price, image, size_name, method_payment
    };

    fetch(`${import.meta.env.VITE_API_URL}/sell`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
            } else {
                console.error("Error en la solicitud POST");
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export default createSell