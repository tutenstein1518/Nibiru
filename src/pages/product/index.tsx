// react

// redux
import { useAppSelector } from "../../features/hooks";
import { cartsSelector } from "../../shared/store/reducers/carts";
// react-router-dom
import { useParams } from "react-router-dom";
// antd
import { Layout } from "antd";
// scss
import index from "./index.module.scss";
import { HeaderPanel } from "../../widgets/product/product-panel";
import { ProductContent } from "../../widgets/product/product-content";

// antd

export const Product = () => {
  //state
  const items = useAppSelector(cartsSelector);
  let { id } = useParams();
  const element = items.filter((i) => i.id === Number(id))[0] || {};
  return (
    <Layout className={index.root}>
      <HeaderPanel element={element} />
      <ProductContent element={element} />
    </Layout>
  );
};
