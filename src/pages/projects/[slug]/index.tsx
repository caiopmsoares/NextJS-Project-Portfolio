import { Header } from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectContainerStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <ProjectBanner
        title="Projeto 01"
        type="Website"
        imgUrl="https://cdn.myportfolio.com/30f473ef-fb6d-4906-8967-e984c6548bb0/97faa990-5fde-4a89-aaf2-d73fa50994f8_rw_1200.png?h=73f4a108ad561c1c061ef3b8b3bfd2b5"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          voluptatum quisquam placeat, inventore ratione omnis fuga dicta. Eaque
          non numquam, adipisci nostrum reprehenderit itaque! Officia et ullam
          minus omnis aut alias sapiente magnam. Provident ipsa veritatis
          aperiam labore cumque asperiores dolore quibusdam quidem commodi alias
          quasi nisi voluptatibus quod in tempore distinctio voluptas cupiditate
          earum, voluptate reiciendis officiis, eligendi corporis. Fugiat vitae
          aspernatur excepturi nulla repellat odio ullam id nisi esse, officia
          delectus dolor quam ducimus porro similique autem alias?
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
