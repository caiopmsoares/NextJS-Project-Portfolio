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
          img="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 2"
          type="Website"
          img="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 3"
          type="Website"
          img="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
          slug="teste"
        />
        <ProjectItem
          title="Projeto 4"
          type="Website"
          img="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
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
