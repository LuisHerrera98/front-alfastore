import calculateSells from "./calculateSells";

const fetchSells = async (setSells, date, setTotal, setGanancy, setCash, setTransfer, setCard) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/sell/${date}`
    );
    let data = await response.json();
    calculateSells(data, setTotal, setGanancy, setCash, setTransfer, setCard)
    setSells(data);
  } catch (error) {
    console.error("Error de red:", error);
  }
};

export default fetchSells;