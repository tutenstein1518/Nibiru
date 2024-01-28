// ui
import { ProductTitle } from "../../../enteties/ui/product/top-panel_title";
import { GoBack } from "../../../features/go-back_button";
// scss
import index from "./index.module.scss";

// antd
import { Layout } from "antd";
import { useAppSelector } from "../../../features/hooks";
import { productDetail } from "../../../shared/store/reducers/carts/selectors";

const { Header } = Layout;

export const HeaderPanel = () => {
  const element = useAppSelector(productDetail);

  return (
    <Header className={index.root}>
      <GoBack />
      <ProductTitle element={element} />
    </Header>
  );
};
