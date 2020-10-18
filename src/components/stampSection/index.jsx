import Button from '../Button'
import { Container } from './styles'

export default function StampSection(props) {
  return (
    <Container>
      <div className="content">
        <div
          className="filter-gold"
          data-aos={screen.width <= 768 ? 'flip-left' : 'fade-right'}
          data-aos-delay="250"
        >
          <img src=" assets/stamp.svg" id="stamp" />
        </div>
        <div
          className="description"
          data-aos={screen.width <= 768 ? 'fade-down' : 'fade-left'}
          data-aos-delay="500"
        >
          <label>
            Eu vou te dar uma garantia
            <br /> <b>e assumir todos os riscos!</b>
          </label>
          <p>
            Se por algum motivo você achar que esse treinamento não é para você
            basta me enviar uma mensagem em até 7 dias e vou devolver 100% do
            seu dinheiro.
          </p>
        </div>
      </div>
    </Container>
  )
}
