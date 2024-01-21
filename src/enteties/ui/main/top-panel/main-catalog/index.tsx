// react
import { cloneElement, useState } from "react";
// antd
import type { MenuProps } from "antd";
import { Dropdown, Space, Divider, Button } from "antd";
// scss
import index from "./index.module.scss";

import {
  useAppDispatch,
  useAppSelector,
} from "./../../../../../features/hooks";
import {
  categorySelector,
  setCategory,
} from "./../../../../../shared/store/reducers/carts";
// enteties
import { categories } from "../../../../../shared/categories";

// Прикрепляем наш массив к конструкции antd
const items: MenuProps["items"] = categories.map((key) => ({
  key,
  label: <div>{key}</div>,
}));

export const Catalog = () => {
  // Подводим редакс
  const dispatch = useAppDispatch();
  const category = useAppSelector(categorySelector);
  // Состояние: открыть / закрыть панель
  const [open, setOpen] = useState<boolean>(false);
  // Состояние: выбранная панель
  const [selected, setSelected] = useState<string[]>(category);
  //onSelect вызывается для того, чтобы добавлять выбранные категории в новый массив
  const onSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelected(selectedKeys);
  };
  // onClick вызывается при нажатии на кнопку применить в выпадающем меню и обновляет состояние filter, передавая в него новые элементы
  const onClick = () => {
    dispatch(setCategory(selected));
    setOpen(false);
  };
  const onCancel = ({ key }: { key: string }) => {
    const result = selected.filter((i) => i !== key);
    setSelected(result);
  };

  return (
    <Dropdown
      open={open}
      menu={{
        items,
        selectable: true,
        onSelect: onSelect,
        onClick: onCancel,
        multiple: true,
        selectedKeys: selected,
      }}
      trigger={["click"]}
      // className="catalog-dropDown"
      dropdownRender={(menu) => (
        <div style={{ backgroundColor: "white", width: 400 }}>
          <div>
            {cloneElement(menu as React.ReactElement, {
              style: {
                boxShadow: "none",
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "1fr",
              },
            })}
          </div>
          <Divider style={{ margin: 0 }} />
          <Space style={{ padding: 8 }}>
            <Button onClick={onClick} type="primary">
              Применить
            </Button>
          </Space>
        </div>
      )}
    >
      <div className={index.root}>
        {" "}
        <a
          onClick={(e) => {
            e.preventDefault();
            setOpen((prevState) => !prevState);
          }}
        >
          Каталог
          <Space />
        </a>
      </div>
    </Dropdown>
  );
};
