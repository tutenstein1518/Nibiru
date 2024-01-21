// antd
import { List, Spin } from "antd";

import InfiniteScroll from "react-infinite-scroll-component";
// scss
import index from "./index.module.scss";
// redux
import { useAppDispatch, useAppSelector } from "../../../../features/hooks";
import {
  cartsSelector,
  getCarts,
  countSelector,
} from "../../../../shared/store/reducers/carts";
// react
import { useEffect } from "react";
// ui
import { Cart } from "../cart-Item";

export const CartList = () => {
  const dispatch = useAppDispatch();
  // states
  const items = useAppSelector(cartsSelector);
  const count = useAppSelector(countSelector);
  useEffect(() => {
    dispatch(getCarts(0));
  }, []);
  const next = () => {
    dispatch(getCarts(items.length));
  };

  return (
    <div className={index.root} id="scrollableDiv">
      <InfiniteScroll
        dataLength={items.length}
        next={next}
        hasMore={items.length < count}
        loader={<Spin />}
        endMessage="Вы посмотрели весь список!"
        scrollableTarget="scrollableDiv"
        style={{
          overflow: "hidden",
        }}
      >
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={items}
          renderItem={(items) => (
            <List.Item>
              <Cart items={items} />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
