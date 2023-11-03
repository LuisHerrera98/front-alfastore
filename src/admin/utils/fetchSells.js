const fetchSells = async (setSells, date) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/sell/sells/${date}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSells(data);
      } else {
        console.error("Error al obtener las ventas");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  export default fetchSells;