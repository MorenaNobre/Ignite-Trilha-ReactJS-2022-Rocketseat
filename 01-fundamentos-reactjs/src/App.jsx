import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

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
        </main>
      </div>
    </div>
  );
}
