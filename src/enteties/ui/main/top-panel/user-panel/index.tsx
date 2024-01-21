// scss
import index from "./index.module.scss";
// icons
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
// antd
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
// react-router-dom
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">Мои объявления</a>,
    key: "0",
  },
  {
    label: <a href="#">Подписчики</a>,
    key: "1",
  },
  {
    label: <a href="https://www.aliyun.com">Подписки</a>,
    key: "2",
  },
  {
    label: <a href="https://www.aliyun.com">Настройки</a>,
    key: "3",
  },

  {
    type: "divider",
  },
  {
    label: "Чаты",
    key: "3",
  },
];

export const UserPanel = () => {
  return (
    <div className={index.root}>
      <div className={index.profile}>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <UserOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <Link to="/">
        <ShoppingCartOutlined />
      </Link>
      <Link to="/">
        <HeartOutlined />
      </Link>
    </div>
  );
};
