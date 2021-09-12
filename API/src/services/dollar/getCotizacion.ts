import axios from "axios";

const getCotizacion = async () => {
  try {
    const { data } = await axios.get(`${process.env["BASE_URL"]}/dollar`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCotizacion;
