import { Input as InputAntd } from "antd";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { setFilterByInput } from "../store/reducers/carts";

export const Input = () => {
  const dispatch = useDispatch();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(setFilterByInput(inputValue));
  };

  return (
    <InputAntd
      onChange={handleInputChange}
      placeholder="найти: объявление, продавца"
    />
  );
};
