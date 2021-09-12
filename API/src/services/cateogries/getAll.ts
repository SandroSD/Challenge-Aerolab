import axios from "axios";
import Category from "../../models/Category";

const getAll = async () => {
  try {
    const { data } = await axios.get(`${process.env["BASE_URL"]}/categories`);

    let categories: Category[] = [];

    data.categories.forEach((c: any) => {
      const category = new Category();

      category.id = c.id;
      category.name = c.name;
      category.parent_id = c.parent_id;

      categories.push(category);
    });

    return nest(categories);
  } catch (error) {
    console.log(error);
  }
};

const nest = (
  categories: Category[],
  id = null,
  link = "parent_id"
): Category[] =>
  categories
    .filter((item: any) => item[link] === id)
    .map((item: any) => ({ ...item, children: nest(categories, item.id) }));

export default getAll;
