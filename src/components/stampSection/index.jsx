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
          data-aos-delay="1500"
        >
          <label>
            Eu vou te dar uma garantia
            <br /> <b>e assumir todos os riscos!</b>
          </label>
          <p>
            Se você por algum motivo não quiser mais o treinamento, eu devolvo
            100% do seu dinheiro de volta. Basta me mandar um e-mail
          </p>
        </div>
      </div>
    </Container>
  )
}
