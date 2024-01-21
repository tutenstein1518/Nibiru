// antd
import { Dropdown, Space, Button, MenuProps } from "antd";
//scss
import index from "./index.module.scss";
import { minMax } from "../../../../shared/filters/byPrice";
// react
import { useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { setFilterByPrice } from "../../../../shared/store/reducers/carts";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <label style={{ cursor: "pointer" }}>Самые дешевые</label>,
  },
  {
    key: "2",
    label: <label style={{ cursor: "pointer" }}>Самые дорогие</label>,
  },
];

export const ByPrice = () => {
  const [selected, setSelected] = useState<string[]>(minMax);

  const onSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelected(selectedKeys);
  };

  // redux
  const dispatch = useDispatch();
  const onClick = ({ key }: any) => {
    dispatch(setFilterByPrice(key));
  };

  return (
    <Button className={index.button} type="primary">
      <Dropdown menu={{ items, onSelect: onSelect, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>По дороговизне</Space>
        </a>
      </Dropdown>
    </Button>
  );
};
