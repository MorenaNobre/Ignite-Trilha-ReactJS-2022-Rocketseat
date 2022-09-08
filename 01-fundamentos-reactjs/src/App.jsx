import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Morena Nobre"
            content="Um post muito da hora que fala sobre coisas muito legais"
          />
          <Post author="Leona Valência" content="Um post sérião" />
          <Post author="Bianca Arranca" content="Um post de memes" />
        </main>
      </div>
    </div>
  );
}
