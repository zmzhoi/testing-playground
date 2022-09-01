interface Props {
  title: string;
  description: string;
}

function SimpleCard({ title, description }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default SimpleCard;
