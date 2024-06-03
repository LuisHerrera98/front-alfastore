const createSize = async (name, category_id) => {
  const body = {
    name,
    category_id,
  };
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/size/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const statusCode = response.status;
    const data = await response.json();
    if (data) {
      return [data.message, statusCode]
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default createSize;
