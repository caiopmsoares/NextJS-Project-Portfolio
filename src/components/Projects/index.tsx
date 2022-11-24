import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

export default function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />
      <section>
        <ProjectItem
          title="Projeto 1"
          type="Website"
          img='"https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/6d49ff9a-fd29-48b4-8172-88c94a26a218_rw_1920.png?h=60cdc633455aec5a028151186a8f29f0"'
          slug="teste"
        />
        <ProjectItem
          title="Projeto 2"
          type="Website"
          img='"https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/6d49ff9a-fd29-48b4-8172-88c94a26a218_rw_1920.png?h=60cdc633455aec5a028151186a8f29f0"'
          slug="teste"
        />
        <ProjectItem
          title="Projeto 3"
          type="Website"
          img='"https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/6d49ff9a-fd29-48b4-8172-88c94a26a218_rw_1920.png?h=60cdc633455aec5a028151186a8f29f0"'
          slug="teste"
        />
        <ProjectItem
          title="Projeto 4"
          type="Website"
          img='"https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/6d49ff9a-fd29-48b4-8172-88c94a26a218_rw_1920.png?h=60cdc633455aec5a028151186a8f29f0"'
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
