// scss
import { IProp } from "../../../types/iprop";
// types
import index from "./index.module.scss";
// antd
import { Rate } from "antd";

export const Saler = ({ element }: IProp) => {
  return (
    <div className={index.saler}>
      <div className={index.saler_personal}>
        <h3>{element.saller}</h3>
        <img
          className={index.saler_img}
          src={element.img_avatar}
          alt="avatar"
        />
      </div>
      <div className={index.saler_rate}>
        <Rate disabled defaultValue={4.5} />
      </div>
      <div className={index.date}>
        <p>Зарегистрирован с 05/2018</p>
      </div>
    </div>
  );
};
