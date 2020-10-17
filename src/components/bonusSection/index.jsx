import Button from '../Button'
import { Container } from './styles'

export default function BonusSection(props) {
  const { title, paragraph, lastParagraph, textButton } = props
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
        <label>{title}</label>
        <p id="paragraph">{paragraph}</p>
        <p>{lastParagraph}</p>
      </div>
      <Button
        width="332px"
        image="assets/arrow_right.svg"
        bgColor="#D5FAEB"
        childrenColor="#58C4B5"
        shadow={false}
        bgHover="#fff"
      >
        {textButton}
      </Button>
    </Container>
  )
}
