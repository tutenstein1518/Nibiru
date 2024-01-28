// react

// redux
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import {
  cartsSelector,
  getCarts,
  getProductsDetail,
  reset,
} from "../../shared/store/reducers/carts";
// react-router-dom
import { useParams } from "react-router-dom";
// antd
import { Layout } from "antd";
// scss
import index from "./index.module.scss";
import { HeaderPanel } from "../../widgets/product/product-panel";
import { ProductContent } from "../../widgets/product/product-content";
import { useEffect } from "react";

type QueryParams = {
  id: string;
};

export const Product = () => {
  //state
  const dispatch = useAppDispatch();
  const { id } = useParams<QueryParams>();

  useEffect(() => {
    if (id) dispatch(getProductsDetail(id));

    return () => {
      dispatch(reset());
    };
  }, []);

  // const element = items.filter((i) => i.id === Number(id))[0] || {};
  return (
    <Layout className={index.root}>
      <HeaderPanel />
      <ProductContent />
    </Layout>
  );
};
