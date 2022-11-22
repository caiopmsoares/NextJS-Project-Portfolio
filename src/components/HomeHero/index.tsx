import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/pessoa.webp';

export default function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Bem-vindo ao meu portfólio</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007b'}
            <div>
              Nome: <span className="blue">Caio Macedo,</span>
            </div>
            <div>
              Idade: <span className="blue">24</span>
            </div>
            {'\u007d'}
          </CodeItem>

          <CodeItem>
            <span className="comment">//Minha atual ocupação</span>
            <span className="purple">Cargo</span> {'\u007b'}
            <div>
              Função: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Empresa: <span className="blue">Globo</span>
            </div>
            {'\u007d'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
