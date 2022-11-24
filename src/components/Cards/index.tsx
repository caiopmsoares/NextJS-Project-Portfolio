import SectionTitle from '../SectionTitle';
import CardBox from './CardBox';
import { Container } from './styles';

export default function Cards() {
  return (
    <Container>
      <SectionTitle title="6 anos" description="de experiência" />
      <section>
        <CardBox
          year="2020"
          title="Dev Front-end"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <CardBox
          year="2020"
          title="Dev Front-end"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <CardBox
          year="2020"
          title="Dev Front-end"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <CardBox
          year="2020"
          title="Dev Front-end"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </section>
    </Container>
  );
}
