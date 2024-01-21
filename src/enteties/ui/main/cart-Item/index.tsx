import { Card } from "antd";
// redux
import { Link } from "react-router-dom";
// scss
import index from "./index.module.scss";
// types
import { ICart } from "../../../../shared/types/cart";
// props
interface ICartProps {
  items: ICart;
}
// cart-data
const { Meta } = Card;

export const Cart = ({ items }: ICartProps) => {
  return (
    <Link to={`/product/${items.id}`}>
      <div className={index.root}>
        <Card
          hoverable
          key={items.id}
          className={index.cart}
          cover={<img src={items.img} className={index.cover} />}
        >
          <Meta title={items.name} description={items.price} />
        </Card>
      </div>
    </Link>
  );
};
