import axios from "axios";
import moment from "moment";
import Product from "../../models/Product";
import getCotizacion from "../dollar/getCotizacion";

const getAllService = async () => {
  try {
    const { data } = await axios.get(`${process.env["BASE_URL"]}/products`);

    const dollarRes = await getCotizacion();

    let products: Product[] = [];

    data.products.forEach((p: any) => {
      const product: Product = new Product();

      product.name = p.name;
      product.price = p.price;
      product.presentation = p.presentation;
      product.brand = p.brand;
      product.photo = p.photo;
      product.originalPrice = p.originalPrice;
      product.updatedAt = p.updatedAt;
      product.arsPrice = product.originalPrice * dollarRes.rate;

      products.push(product);
    });

    products = products.filter(
      (p) => moment(p.updatedAt) > moment().startOf("day").subtract(1, "month")
    );

    return {
      data: products,
      count: products.length,
    };
  } catch (error) {
    console.log(error);
  }
};

export default getAllService;
