import AddTodo from "./AddTodo";
import { IItem } from "../types/IItem";
import { useCallback, useState } from "react";
import TodoList from "./TodoList";
import * as css from "./todo.module.css";

const styles = css.default;

const TodoContainer = () => {
  const [items, setItems] = useState<Array<IItem>>([]);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <section className={styles.root}>
      <AddTodo setItems={setItems} />
      <TodoList items={items} removeItem={removeItem} />
    </section>
  );
};

export default TodoContainer;
