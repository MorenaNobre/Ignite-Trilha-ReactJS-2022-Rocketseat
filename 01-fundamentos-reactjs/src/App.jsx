import { Post } from "./Post";

export function App() {
  return (
    <div>
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
