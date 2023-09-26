const createProduct = async (name, cost, price, image, category_id) => {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("cost", cost)
    formData.append("price", price)
    formData.append("category_id", category_id)
    for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i])
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/product/create`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        if (data) {
            return true
        }
    } catch (error) {
        console.log(error);
        return false
    }




}

export default createProduct;