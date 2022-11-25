import { Header } from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjectContainer } from '../../styles/ProjectStyles';

export default function Projects() {
  return (
    <ProjectContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Projeto 1"
          type="Website"
          slug="Teste"
          imgUrl="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          slug="Teste"
          imgUrl="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          slug="Teste"
          imgUrl="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
        />
        <ProjectItem
          title="Projeto 1"
          type="Website"
          slug="Teste"
          imgUrl="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
        />
      </main>
    </ProjectContainer>
  );
}
