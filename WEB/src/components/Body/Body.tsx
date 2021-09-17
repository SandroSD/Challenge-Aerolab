import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import Item from "../Item/Item";
import Product from "../../models/Product";
import { AppContext } from "../../store/app-context";

const Body = () => {
  const appCtx = useContext(AppContext);

  useEffect(() => {
    try {
      const loadData = async () => {
        const { data } = await axios.get(`/products`);

        let productsData = data.data.map((item: Product) => ({
          ...item,
          _cantidad: 0,
        }));

        appCtx.setItems(productsData);
      };
      loadData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container>
      <Row>
        {appCtx.items &&
          appCtx.items.map((p, i) => (
            <Col key={i} xs={6} sm={4} xl={3}>
              <Item product={p} index={i} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Body;
