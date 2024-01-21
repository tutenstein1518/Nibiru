// ui
import { CartList } from "../../enteties/ui/main/cart-list";
import { FilterPanel } from "../../features/filters-panel";
// scss
import index from "./index.module.scss";

export const Content = () => {
  return (
    <div className={index.root}>
      <FilterPanel />
      <CartList />
    </div>
  );
};
