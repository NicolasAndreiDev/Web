import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import axios from "axios";

function useMotoboys(id) {
  const [motoboys, setMotoboys] = useState([]);
  const baseUrl = "http://localhost:4000/motoboys/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id ? `${baseUrl}${id}` : baseUrl;
        const response = await axios.get(url);
        setMotoboys(response.data);
      } catch (error) {
        console.error("Erro ao buscar pelas informações dos motoboys: ", error);
      }
    };

    fetchData();
  }, [id]);

  return motoboys;
}

useMotoboys.propTypes = {
  id: PropTypes.string,
};

export default useMotoboys;
