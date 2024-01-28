// scss
import index from "./index.module.scss";
// types
import { IProp } from "../../../shared/types/iprop";
// antd
import { Layout } from "antd";
// ui
import { ProductCarousel } from "../../../features/carousel";
import { ProductInfo } from "../../../enteties/ui/product/product-info";
import { UserCart } from "../../../enteties/ui/product/user-info_cart/index";
import { ProductBreadcrumbs } from "../../../enteties/ui/product/breadcrumbs";
import { productDetail } from "../../../shared/store/reducers/carts/selectors";
import { useAppSelector } from "../../../features/hooks";

const { Content } = Layout;

export const ProductContent = () => {
  const element = useAppSelector(productDetail);
  return (
    <Content className={index.root}>
      <ProductBreadcrumbs element={element} />
      <div className={index.page}>
        <div className={index.column_1}>
          <ProductCarousel element={element} />
        </div>
        <div className={index.column_2}>
          <UserCart element={element} />
          <ProductInfo element={element} />
        </div>
        <div className={index.column_3}></div>
      </div>
    </Content>
  );
};
