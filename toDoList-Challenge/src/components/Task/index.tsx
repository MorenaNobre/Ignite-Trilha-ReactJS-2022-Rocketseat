import {TbTrash} from "react-icons/tb"
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        soluta!
      </p>
      <button className={styles.deleteButton}>
        <TbTrash size={20}/>
      </button>
    </div>
  );
}
