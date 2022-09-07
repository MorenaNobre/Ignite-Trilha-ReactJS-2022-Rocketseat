//props = obj { author: "", content: ""}

export function Post(props) {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
}
