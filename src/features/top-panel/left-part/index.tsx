// scss
import index from "./index.module.scss";
// ui
import { SearchInput } from "../../../enteties/ui/main/top-panel/main-input";
import { Catalog } from "../../../enteties/ui/main/top-panel/main-catalog";

export const LeftPart = () => {
  return (
    <div className={index.left_part}>
      <SearchInput />
      <Catalog />
    </div>
  );
};
