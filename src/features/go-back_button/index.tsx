import { LeftOutlined } from "@ant-design/icons";
// scss
import index from "./index.module.scss";
// antd
import { Button } from "antd";
// router
import { useNavigate } from "react-router-dom";

export const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Button type="text" className={index.back} onClick={goBack}>
      <LeftOutlined />
      Назад
    </Button>
  );
};
