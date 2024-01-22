// ui
import { Button, Modal } from "antd";
import index from "./index.module.scss";
// react
import { useState } from "react";

// components
import { Comment } from "./comment";

export const UiComments = () => {
  // modal
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className={index.root}>
      <Button type="primary" onClick={showModal}>
        Открыть комментарии
      </Button>
      <Modal
        open={open}
        title="Комментарии"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Оставить коментарий
          </Button>,
        ]}
      >
        <Comment />
      </Modal>
    </div>
  );
};
