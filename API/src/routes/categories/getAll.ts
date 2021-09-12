import { Request, Response } from "express";

import getAllService from "../../services/cateogries/getAll";

const getAll = async (req: Request, res: Response) => {
  try {
    const categories = await getAllService();

    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);

    return res.status(500);
  }
};

export default getAll;
