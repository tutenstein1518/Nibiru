// antd
import { Dropdown, Space, Button, MenuProps } from "antd";
//scss
import index from "./index.module.scss";
// redux
import { useDispatch } from "react-redux";
import { setFilterByDate } from "../../../../shared/store/reducers/carts";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <label style={{ cursor: "pointer" }}>Новые</label>,
  },
  {
    key: "2",
    label: <label style={{ cursor: "pointer" }}>Старые</label>,
  },
];

export const ByTime = () => {
  const dispatch = useDispatch();
  const onClick = ({ key }: any) => {
    dispatch(setFilterByDate(key));
  };
  return (
    <Button className={index.button} type="primary">
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>По Времени</Space>
        </a>
      </Dropdown>
    </Button>
  );
};
