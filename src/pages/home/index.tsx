import { Content } from "../../widgets/content";
import { TopPanel } from "../../widgets/top-panel";
import index from "./index.module.scss";

export const Home = () => {
  return (
    <div className={index.root}>
      <TopPanel />
      <Content />
    </div>
  );
};
