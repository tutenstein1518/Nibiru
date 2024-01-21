// scss
import { ByPrice } from "../../enteties/ui/main/filter-panel_buttons/ByPrice";
import { ByRating } from "../../enteties/ui/main/filter-panel_buttons/ByRating";
import { ByTime } from "../../enteties/ui/main/filter-panel_buttons/ByTime";
import index from "./index.module.scss";

export const FilterPanel = () => {
  return (
    <div className={index.root}>
      <ByTime />
      <ByPrice />
      <ByRating />
    </div>
  );
};
