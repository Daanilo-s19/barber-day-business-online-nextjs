import Button from '../Button'
import { Container } from './styles'

export default function BonusSection(props) {
  return (
    <Container>
      <img
        src=" assets/BRUNO-VANENCK.svg"
        id="player"
        data-aos={screen.width <= 425 ? 'fade-down' : 'fade-right'}
        data-aos-delay="250"
      />
      <div
        className="content"
        data-aos={screen.width <= 425 ? 'fade-down' : 'fade-left'}
        data-aos-delay="1500"
      >
        <img src="assets/bonus.svg" />
        <label>Você ainda vai levar esse bônus incrível!</label>
        <p id="paragraph">
          Quem entrar pra essa segunda turma vai receber um módulo extra com um
          treinamento de <b>GESTÃO e VENDAS</b> com o <b>BRUNO VANENCK</b>, o
          criador da Barbearia Corleone em São Paulo.
        </p>
        <p>
          Conheça a história da Barbearia Corleone. Com 6 unidades em São Paulo,
          é considerada uma das barbearias mais conceituadas do mundo.
        </p>
      </div>
      <Button
        width="332px"
        image="assets/arrow_right.svg"
        bgColor="#D5FAEB"
        childrenColor="#58C4B5"
        shadow={true}
        bgHover="rgba(42, 158, 152, 1)"
        onClick={() => onChange(true)}
      >
        Alavancar minha barbearia agora
      </Button>
    </Container>
  )
}
