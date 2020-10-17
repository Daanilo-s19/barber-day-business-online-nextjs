import PropTypes from 'prop-types'
import { Item, Section } from './styles'

export default function MethodSection(props) {
  const { title, subtitle, item } = props
  return (
    <Section data-aos="fade-up">
      <div className="content-header">
        <div className="title">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <div className="border" data-aos="fade-right" data-aos-delay="300">
          <span>Você aprende o Método Gestão Seu Elias.</span>
        </div>
      </div>
      <div className="content-item">
        <div className="content-alignment-flex ">
          {item &&
            item.map((element, index) => {
              return (
                <div key={index} data-aos="zoom-in-up">
                  <Item>
                    <div className="content-header">
                      <div className="box-icon">
                        <img src={element.url} alt={element.url} />
                      </div>
                      <div className="title-header">
                        <p id="module">{element.module}</p>
                        <p id="nameModule">{element.nameModule}</p>
                      </div>
                    </div>
                    <span>{element.description}</span>
                  </Item>
                </div>
              )
            })}
        </div>
      </div>
    </Section>
  )
}
MethodSection.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.any.isRequired,
}
