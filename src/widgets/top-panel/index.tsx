// scss
import { UserPanel } from "../../enteties/ui/main/top-panel/user-panel";
import { LeftPart } from "../../features/top-panel/left-part";
import index from "./index.module.scss";

export const TopPanel = () => {
  return (
    <div className={index.root}>
      <LeftPart />
      <UserPanel />
    </div>
  );
};
