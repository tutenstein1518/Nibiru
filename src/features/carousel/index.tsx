// types
import { Carousel } from "antd";
// scss
import index from "./index.module.scss";
import { IProp } from "../../shared/types/iprop";

const contentStyle: React.CSSProperties = {
  margin: 0,
  color: "#000",
  width: "500px",
  height: "350px",
  border: "1px solid #000",
  textAlign: "center",
  background: "#008170",
};

const onChange = (_currentSlide: number) => {};

export const ProductCarousel = ({ element }: IProp) => {
  return (
    <div className={index.root}>
      <Carousel effect="fade" afterChange={onChange} className={index.carousel}>
        <div>
          <img
            className={index.carousel_img}
            src={element?.img_slider_1}
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            className={index.carousel_img}
            src={element?.img_slider_2}
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            className={index.carousel_img}
            src={element?.img_slider_3}
            style={contentStyle}
          ></img>
        </div>
      </Carousel>
    </div>
  );
};
