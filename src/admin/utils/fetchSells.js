const fetchSells = async (setSells, date) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/sell/sells/${date}`
    );
    let data = await response.json();
    setSells(data);
  } catch (error) {
    console.error("Error de red:", error);
  }
};

export default fetchSells;