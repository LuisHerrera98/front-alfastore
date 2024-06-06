async function decrementAndSell(product_id, size_id) {
    const data = {
        product_id,
        size_id
    };

    try {
        await fetch(`${import.meta.env.VITE_API_URL}/product/decrement`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error:', error);
    }
}


export default decrementAndSell;