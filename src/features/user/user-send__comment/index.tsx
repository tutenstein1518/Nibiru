import { CommentOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu } from "antd";
import { useState } from "react";

const { TextArea } = Input;

export const SendComment = () => {
  const [value, setValue] = useState("");

  const menu = (
    <Menu>
      <Menu.Item key="comment-input">
        <TextArea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your comment"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a href="#" onClick={(e) => e.preventDefault()}>
        <CommentOutlined />
      </a>
    </Dropdown>
  );
};
