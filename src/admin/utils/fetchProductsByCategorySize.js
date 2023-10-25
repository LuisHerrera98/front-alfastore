const fetchProductsByCategorySize = async (setProducts, category_id, size_id) => {

    const data = {
        category_id,
        size_id
    }

    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/product/products/category`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        );
        if (response.ok) {
            const data = await response.json();
            setProducts(data);
        } else {
            console.error("Error al obtener las categorías");
        }
    } catch (error) {
        console.error("Error de red:", error);
    }
};

export default fetchProductsByCategorySize;