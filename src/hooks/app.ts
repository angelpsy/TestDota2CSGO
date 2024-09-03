import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { addItem, removeLastItem } from "../store/slices/items";
import { getRandomColor } from "../utils/colors";

export const useApp = () => {
  const items = useSelector((state: RootState) => state.items.value);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      color: getRandomColor(),
    };
    dispatch(addItem(newItem));
  };

  const handleRemoveLastItem = () => {
    dispatch(removeLastItem());
  };

  return {
    items,
    handleAddItem,
    handleRemoveLastItem,
  };
};
