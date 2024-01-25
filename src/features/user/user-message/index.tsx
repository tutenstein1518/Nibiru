import { Button } from "antd";
import index from "./index.module.scss";

export const SendMessage = () => {
  return (
    <Button type="primary" className={index.user_cart__button}>
      Написать
    </Button>
  );
};
