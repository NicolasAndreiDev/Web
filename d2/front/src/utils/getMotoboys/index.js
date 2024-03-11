import { useEffect, useState } from "react";
import axios from "axios";

function useMotoboys() {
  const [motoboys, setMotoboys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/motoboys");
        setMotoboys(response.data);
      } catch (error) {
        console.error("Erro ao buscar pelas informações dos motoboys: ", error);
      }
    };

    fetchData();
  }, []);

  return motoboys;
}

export default useMotoboys;
