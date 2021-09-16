import React, { FC, useContext } from "react";
import { Button, Col } from "reactstrap";
import Product from "../../models/Product";
import "./Item.scss";

import { AppContext } from "../../store/app-context";

const Item: FC<{
  product: Product;
  index: number;
}> = ({ product, index }) => {
  const appCtx = useContext(AppContext);

  return (
    <Col className="item">
      <Col>
        <img className="imagen" src={product._photo} alt="product" />
      </Col>
      <Col>
        <span>{product._name}</span>
      </Col>
      <Col id="price">
        {product._cantidad > 0 && `${product._cantidad}x`} ${" "}
        {Number(product._arsPrice).toLocaleString("de-DE", {
          minimumFractionDigits: 2,
        })}
      </Col>
      {product._cantidad === 0 ? (
        <Button
          className="btn-carrito"
          onClick={() => appCtx.addItem(index, product._id)}
        >
          Agregar al carrito
        </Button>
      ) : (
        <>
          <Button
            className="btn"
            onClick={() => appCtx.removeItem(index, product._id)}
          >
            -
          </Button>
          <span className="cantidad">{product._cantidad}</span>
          <Button
            className="btn"
            onClick={() => appCtx.addItem(index, product._id)}
          >
            +
          </Button>
        </>
      )}
    </Col>
  );
};

export default Item;
