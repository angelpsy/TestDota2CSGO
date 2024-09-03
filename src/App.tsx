import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "./hooks/app";

import "./styles.css";

export default function App() {
  const { items, handleAddItem, handleRemoveLastItem } = useApp();

  return (
    <div className="App">
      <div className="actions">
        <button onClick={handleAddItem}>Add Item</button>
        <button onClick={handleRemoveLastItem}>Remove Last Item</button>
      </div>
      <div className="row">
        <AnimatePresence initial={false}>
          {items.map((item) => {
            return (
              <motion.div
                key={item.id}
                className="item"
                style={{ backgroundColor: item.color }}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 100 }}
              ></motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
