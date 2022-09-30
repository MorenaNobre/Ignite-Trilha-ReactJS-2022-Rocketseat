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
    onAddTask(title);
    setTitle("");
  }

  function handleOnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    event.target.setCustomValidity("");
    setTitle(event.target.value);
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskEmpty = title.length === 0

  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="ToDo list Logo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={handleOnChangeTitle}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button disabled={isNewTaskEmpty}>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
