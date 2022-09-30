import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import toDoLogo from "../../assets/toDo-Logo.svg";
import styles from "./Header.module.css";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function handleOnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="ToDo list Logo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={handleOnChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
