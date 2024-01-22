// ui
import { Button, Modal } from "antd";
// react
import { useState } from "react";

// components
import { Comment } from "../../enteties/ui/product/comment-item/comment";

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
    <div>
      <Button type="primary" onClick={showModal}>
        Открыть комментарии
      </Button>
      <Modal
        open={open}
        title="Комментарии"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Comment />
      </Modal>
    </div>
  );
};
