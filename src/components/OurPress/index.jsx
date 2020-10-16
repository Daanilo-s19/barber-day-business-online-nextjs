import PropTypes from 'prop-types'
import SectionDefault from '../SectionDefault'
import { ItemPress } from './styles'
import AboutMore from '../AboutMore'
import { useState } from 'react'

export default function PressSection(props) {
  const { title, subtitle, item, more } = props
  const [controller, setController] = useState(1)

  return (
    <SectionDefault title={title} subtitle={subtitle}>
      {item &&
        item.map((list, index) => {
          return (
            controller % item.length === index &&
            list.map((element, index) => (
              <ItemPress key={index}>
                <div className="content-video">
                  <iframe
                    width="352"
                    height="198"
                    src="https://www.youtube.com/embed/6raPNl-mfaI"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  >
                    <div className="play" onClick={() => setPlay(true)}>
                      <img src="assets/method_play.svg" alt="method" />
                    </div>
                  </iframe>
                </div>
                <div className="content">
                  <label>{element.title}</label>
                  <p>{element.description}</p>
                </div>
              </ItemPress>
            ))
          )
        })}
    </SectionDefault>
  )
}
PressSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  item: PropTypes.any.isRequired,
  more: PropTypes.string,
}
