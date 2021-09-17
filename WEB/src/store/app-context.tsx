import React, {
  useState,
  createContext,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

import Product from "../models/Product";

type AppContextObj = {
  items: Product[];
  total: number;
  setItems: Dispatch<SetStateAction<Product[]>>;
  addItem: (index: number, id: number) => void;
  removeItem: (index: number, id: number) => void;
};

export const AppContext = createContext<AppContextObj>({
  items: [],
  total: 0,
  setItems: () => {},
  addItem: (index: number, id: number) => {},
  removeItem: (index: number, id: number) => {},
});

const AppContextProvider: FC = (props) => {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [carritoProducts, setCarritoProducts] = useState<Product[]>([]);

  const [total, setTotal] = useState<number>(0);

  const addToCarrito = (index: number, id: number) => {
    const newProducts = [...listProducts];
    newProducts[index]._cantidad += 1;

    const i = carritoProducts.findIndex((p: Product) => p._id === id);
    if (i > -1) {
      carritoProducts.splice(index, 1);
    }

    let newCarritoProducts: Product[] = [
      ...carritoProducts,
      newProducts[index],
    ];

    setCarritoProducts(newCarritoProducts);
    setListProducts(newProducts);
    setTotal(calcularTotal(newCarritoProducts));
  };

  const removeFromCarrito = (index: number, id: number) => {
    const newProducts = [...listProducts];
    newProducts[index]._cantidad -= 1;

    if (newProducts[index]._cantidad === 0) {
      const i = carritoProducts.findIndex((p: Product) => p._id === id);

      carritoProducts.splice(i, 1);
    }

    setCarritoProducts(newProducts);
    setTotal(calcularTotal(carritoProducts));
  };

  const calcularTotal = (productos: Product[]): number => {
    let precioTotal: number = 0;
    productos.forEach((p: Product) => {
      let subTotal: number = 0;
      subTotal = p._cantidad * p._arsPrice;
      precioTotal += subTotal;
    });

    return precioTotal;
  };

  const contextValue: AppContextObj = {
    items: listProducts,
    total: total,
    setItems: setListProducts,
    addItem: addToCarrito,
    removeItem: removeFromCarrito,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
