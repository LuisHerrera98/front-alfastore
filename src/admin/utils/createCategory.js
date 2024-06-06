const createCategory = async (name,image) => {

    const formData = new FormData()
    formData.append("name", name)
    for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i])
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/category`, {
          method: 'POST', 
          body: formData
      })
      const statusCode = response.status;
      const data = await response.json()
      if(data){
          return [data.message, statusCode]
      }
  } catch (error) {
      console.log(error);
      return false
  }
  };

  export default createCategory