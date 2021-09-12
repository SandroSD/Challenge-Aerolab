import { Request, Response } from "express";

import getAllService from "../../services/products/getAll";

const getAll = async (req: Request, res: Response) => {
  try {
    const products = await getAllService();

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);

    return res.status(500);
  }
};

export default getAll;
