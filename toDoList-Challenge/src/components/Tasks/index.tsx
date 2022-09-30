import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./Tasks.module.css";

interface Props {
  tasks: ITask[];
}

export function Tasks({ tasks }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criados</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Tarefas concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
