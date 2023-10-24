class Size {
    constructor(id, nombre, talle) {
      this.id = id;
      this.name = nombre;
      this.cuantity = talle;
    }
}

const createArraySizes = (inputs) => {
    const nonSizes = ["name", "cost", "price", "image"];
    const stocks = [];

    for(let i = 0; i < inputs.target.length; i++){
        if(!nonSizes.includes(inputs.target[i].name)){
            stocks.push(new Size(inputs.target[i].id, inputs.target[i].name, inputs.target[i].value));
        }
    }
    stocks.pop()
    const stock = JSON.stringify(stocks);
    return stock;
}
const createProduct = async (name, cost, price, image, category_id, event) => {

    const stock = createArraySizes(event)
    
    const formData = new FormData()
    formData.append("name", name)
    formData.append("cost", cost)
    formData.append("price", price)
    formData.append("category_id", category_id)
    for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i])
    }
    formData.append("stock", stock)

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