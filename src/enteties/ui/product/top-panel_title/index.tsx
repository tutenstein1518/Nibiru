// scss
import index from "./index.module.scss";
// types
import { IProp } from "../../../../shared/types/iprop";

export const ProductTitle = ({ element }: IProp) => {
  return <div className={index.root}>{element?.name}</div>;
};
