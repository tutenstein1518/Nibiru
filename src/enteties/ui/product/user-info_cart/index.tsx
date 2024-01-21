// scss
import index from "./index.module.scss";
// types
import { IProp } from "../../../../shared/types/iprop";
// antd
import { ButtonsPanel } from "../../../../shared/ui/user_ui/user-panel_buttons";
import { Rate } from "antd";

export const UserCart = ({ element }: IProp) => {
  return (
    <div className={index.root}>
      <div className={index.user_info}>
        <div className={index.user}>
          <h3>{element.saller}</h3>
          <img src={element.img_avatar} alt="#" />
        </div>
        <Rate disabled allowHalf defaultValue={element.rating} />
      </div>

      <ButtonsPanel />
    </div>
  );
};
