// antd
import { Button } from "antd";
// scss
import index from "./index.module.scss";
import { UiComments } from "../../../product_comments";
export const ButtonsPanel = () => {
  return (
    <div className={index.root}>
      <UiComments />
      <Button type="primary" danger block className={index.button}>
        Перейти в чат
      </Button>
      <Button type="primary" danger block className={index.button}>
        Предложить свою цену
      </Button>
    </div>
  );
};
