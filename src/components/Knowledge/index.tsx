import SectionTitle from '../SectionTitle';
import KnowledgeItems from './KnowledgeItem';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobedreamweaver
} from 'react-icons/si';
import { Container } from './styles';

export default function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItems
          title="Adobe Illustrator"
          icon={<SiAdobeillustrator />}
        />
        <KnowledgeItems title="Adobe Photoshop" icon={<SiAdobephotoshop />} />
        <KnowledgeItems
          title="Adobe Premierepro"
          icon={<SiAdobepremierepro />}
        />
        <KnowledgeItems
          title="Adobe Dreamweaver"
          icon={<SiAdobedreamweaver />}
        />
      </section>
    </Container>
  );
}
