// antd
import { Dropdown, Space, Button, MenuProps } from "antd";
//scss
import index from "./index.module.scss";
// redux
import { useDispatch } from "react-redux";
import { setFilterByRating } from "../../../../shared/store/reducers/carts";

const items: MenuProps["items"] = [
  {
    key: 1,
    label: <label style={{ cursor: "pointer" }}>Высокий</label>,
  },
  {
    key: 2,
    label: <label style={{ cursor: "pointer" }}>Низкий</label>,
  },
];

export const ByRating = () => {
  // state

  const dispatch = useDispatch();
  const onClick = ({ key }: any) => {
    dispatch(setFilterByRating(key));
  };
  return (
    <Button className={index.button} type="primary">
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>По рейтингу</Space>
        </a>
      </Dropdown>
    </Button>
  );
};
