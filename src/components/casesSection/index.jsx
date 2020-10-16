import PropTypes from 'prop-types'
import Link from 'next/link'
import { Cases, Container, Player } from './styles'
import AboutMore from '../AboutMore'

export default function CasesSection(props) {
  const { title, subtitle, cases } = props

  return (
    <Container>
      <div className="content-center-header header">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      {cases &&
        cases.map((element, index) => (
          <Player
            order={index % 2 == 0 ? 'true' : 'false'}
            data-aos={
              screen.width > 768
                ? index % 2 === 0
                  ? 'fade-right'
                  : 'fade-left'
                : 'fade-up'
            }
            data-aos-delay="100"
          >
            <img src={element.img} id="player" />
            <div className="content">
              <label id="name">{element.name}</label>
              <label id="tag">{element.tag}</label>
              <p id="description">{element.description}</p>
              <p id="role">{element.role}</p>
            </div>
          </Player>
          // <Cases
          //   key={index}
          //   color={element.color}
          //   hover={element.hover}
          //   order={index % 2 == 0 ? 'true' : 'false'}
          //   // data-aos={
          //   //   screen.width > 768
          //   //     ? index % 2 === 0
          //   //       ? 'fade-right'
          //   //       : 'fade-left'
          //   //     : 'fade-up'
          //   // }
          // >
          //   <div className="content-image">
          //     <img src={element.img} alt="image case" />
          //   </div>
          //   <div className="content-description">
          //     <h5>{element.tag}</h5>

          //     <h4>{element.title}</h4>
          //     <div className="divider">
          //       <span>{element.description}</span>
          //     </div>
          //   </div>
          // </Cases>
        ))}
    </Container>
  )
}
CasesSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  cases: PropTypes.any.isRequired,
  pageCases: PropTypes.bool.isRequired,
  clients: PropTypes.string,
}
