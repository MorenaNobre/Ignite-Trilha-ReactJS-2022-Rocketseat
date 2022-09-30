import toDoLogo from "../../assets/toDo-Logo.svg";
import {AiOutlinePlusCircle} from "react-icons/ai"

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="ToDo list Logo" />

      <form className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}