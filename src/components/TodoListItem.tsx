import { memo, useState } from "react";
import { IItem } from "../types/IItem";
import * as css from "./todo.module.css";

const styles = css.default;

type Props = {
  item: IItem;
  removeItem: (id: number) => void;
};
const TodoListItem = memo(({ item, removeItem }: Props) => {
  const [_, setRefresh] = useState<number>(0);

  const handleCompletion = (e: React.ChangeEvent<HTMLInputElement>) => {
    item.completed = e.target.checked;
    setRefresh(Date.now());
  };

  return (
    <div className={styles.listItem}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={handleCompletion}
      />
      <li
        className={[styles.itemText, item.completed ? styles.completed : ""]
          .join(" ")
          .trim()}
        key={item.id}
      >
        {item.text}
      </li>
      <div className={styles.removeItem} onClick={() => removeItem(item.id)}>
        x
      </div>
    </div>
  );
});

export default TodoListItem;
