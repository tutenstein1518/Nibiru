// ui
import { ProductTitle } from "../../../enteties/ui/product/top-panel_title";
import { GoBack } from "../../../features/go-back_button";
// scss
import index from "./index.module.scss";
// types
import { IProp } from "../../../shared/types/iprop";
// antd
import { Layout } from "antd";

const { Header } = Layout;

export const HeaderPanel = ({ element }: IProp) => {
  return (
    <Header className={index.root}>
      <GoBack />
      <ProductTitle element={element} />
    </Header>
  );
};
