import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter
} from 'react-icons/ai';
import { Container } from './styles';

export default function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com')}
          />
          <AiOutlineLinkedin
            onClick={() => handleRedirect('https://linkedin.com')}
          />
        </section>
      </div>
    </Container>
  );
}
