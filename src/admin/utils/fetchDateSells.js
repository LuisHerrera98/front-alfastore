const fetchDateSell = async (setDateSells) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/sell/dateSells`
      );
      if (response.ok) {
        const data = await response.json();
        setDateSells(data.reverse());
      } else {
        console.error("Error al obtener las fechas de ventas");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  export default fetchDateSell;