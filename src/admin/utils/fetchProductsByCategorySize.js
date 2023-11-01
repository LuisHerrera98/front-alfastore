const fetchProductsByCategorySize = async (setProducts, category_id, size_id) => {

    try {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/product/products/category`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({category_id, size_id})
        }
        );

        const data = await response.json();
        setProducts(data)

    } catch (error) {
        console.error("Error de red:", error);
    }
};

export default fetchProductsByCategorySize;