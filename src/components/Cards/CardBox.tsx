import { BoxContainer } from './styles';

interface CardBoxProps {
  year: string;
  title: string;
  description: string;
}

export default function CardBox({ year, title, description }: CardBoxProps) {
  return (
    <BoxContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </BoxContainer>
  );
}
