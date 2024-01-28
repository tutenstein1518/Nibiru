// antd
import { Breadcrumb } from "antd";
// types
import { IProp } from "../../../../shared/types/iprop";

export const ProductBreadcrumbs = ({ element }: IProp) => {
  return (
    <Breadcrumb
      style={{
        margin: "16px 20px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        color: "red",
        cursor: "default",
      }}
    >
      <Breadcrumb.Item>{element?.category}</Breadcrumb.Item>
      <Breadcrumb.Item>{element?.subcategory}</Breadcrumb.Item>
      {/* breadCrumb */}
    </Breadcrumb>
  );
};
