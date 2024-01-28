import index from "./index.module.scss";
// types
import { IProp } from "../../../../shared/types/iprop";

export const ProductInfo = ({ element }: IProp) => {
  return (
    <div className={index.root}>
      <p className={index.text}>{element?.description}</p>
    </div>
  );
};
