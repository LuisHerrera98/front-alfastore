async function increment(product_id, size_id) {
    const data = {
        product_id,
        size_id
    };

    try {
        await fetch(`${import.meta.env.VITE_API_URL}/size/increment`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        setTimeout(() => {
        }, 2000);
    } catch (error) {
        console.error('Error:', error);
    }
}


export default increment;