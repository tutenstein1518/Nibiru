// ui
import { Button } from "antd";
import index from "./index.module.scss";

export const Subscribe = () => {
  return (
    <Button className={index.user_cart__subscribe_button} type="primary">
      Подписаться
    </Button>
  );
};
