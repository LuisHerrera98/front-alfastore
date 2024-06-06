const fetchCategories = async (setCategories) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/category`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } else {
        console.error("Error al obtener las categorías");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  export default fetchCategories;