import Head from 'next/head';
import { Header } from '../../components/Header';
import ProjectItem from '../../components/ProjectItem';
import { ProjectContainer } from '../../styles/ProjectStyles';

export default function Projects() {
  return (
    <ProjectContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

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
