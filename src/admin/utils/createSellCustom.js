const createSellCustom = (name,price, method_payment) => {
    const data = {
        name, price, method_payment
    }
    if(method_payment == '') data.method_payment = 'EFECTIVO'

    fetch(`${import.meta.env.VITE_API_URL}/sell/registerSell`, {
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

export default createSellCustom