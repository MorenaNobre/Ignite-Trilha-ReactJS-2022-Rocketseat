import { Header } from "./components/Header";
import { Post } from "./Post";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Morena Nobre"
        content="Um post muito da hora que fala sobre coisas muito legais"
      />
      <Post
        author="Leona Valência"
        content="Um post sérião"
      />
      <Post
        author="Bianca Arranca"
        content="Um post de memes"
      />
    </div>
  );
}
