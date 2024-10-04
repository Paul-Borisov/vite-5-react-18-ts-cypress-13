import * as css from "./todo.module.css";
import { IItem } from "../types/IItem";
import { memo, useState } from "react";

const styles = css.default;

type Props = {
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
};

const AddTodo = memo(({ setItems }: Props) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    setItems((prev) => [...prev, { id: Date.now(), text: text }]);
    setText("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setText(e.target.value)}
        value={text || ""}
      />
      <input
        type="button"
        className={styles.button}
        onClick={handleAddTodo}
        disabled={!text}
        value="Add"
      />
    </div>
  );
});

export default AddTodo;
