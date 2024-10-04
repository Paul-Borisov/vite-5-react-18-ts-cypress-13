import { IItem } from "../types/IItem";
import * as css from "./todo.module.css";
import TodoListItem from "./TodoListItem";

type Props = {
  items: Array<IItem>;
  removeItem: (id: number) => void;
};

const styles = css.default;

const TodoList = ({ items: allItems, removeItem }: Props) => {
  if (!allItems.length)
    return <div className={styles.tasksNotFound}>Tasks not found</div>;

  return (
    <ul className={styles.items}>
      {allItems.map((item) => (
        <TodoListItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </ul>
  );
};

export default TodoList;
