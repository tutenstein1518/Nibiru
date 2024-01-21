// antd
import { Header as AntdHeader } from "antd/es/layout/layout";
// scss
import index from "./index.module.scss";
// links
import { ABOUT, AUTH, FORM, HOME } from "../../../../shared/consts";
import logo from "../../../../shared/logo/logo.png";
// react-router-dom
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AntdHeader className={index.root}>
      <nav className={index.navlist}>
        <div className={index.logo}>
          <img className={index.logo_img} src={logo} alt="nibiru_logo" />
          NIBIRU
        </div>
        <Link to={HOME}>Главная</Link>
        <Link to={FORM}>Новое объявление</Link>
        <Link to={AUTH}>Войти</Link>
        <Link to={ABOUT}>О нас</Link>
      </nav>
    </AntdHeader>
  );
};
