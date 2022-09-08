import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/morenanobre.png" />
          <div className={styles.authorInfo}>
            <strong>Morena Nobre</strong>
            <span>Cool Front-end Dev</span>
          </div>
        </div>

        <time title="08 de Setembro às 10:56" dateTime="2022-09-08 10:57:11">
          Publicado há
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p><a href="">👉 jane.design/doctorcare </a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}
