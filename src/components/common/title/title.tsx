
interface props {
  title: string
}

export function Title({title}:props) {

  return (
    <article className="title" >
      <h2 className="title__headline">{title}</h2>
    </article>
  );
}



