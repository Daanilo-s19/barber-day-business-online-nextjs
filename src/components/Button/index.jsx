import PropTypes from 'prop-types'

import { ButtonDefault } from './styles'

export default function Button(props) {
  const {
    children,
    childrenColor,
    bgColor,
    bgHover,
    shadow,
    width,
    image,
  } = props
  return (
    <a href="https://choquedegestao.barberday.online/" target="_blank">
      <ButtonDefault
        width={width}
        background={bgColor}
        backgroundHover={bgHover}
        shadow={shadow}
        color={childrenColor}
      >
        {children}
        {image ? <img src={image} alt="alavancar" id="image" /> : null}
      </ButtonDefault>
    </a>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  bgHover: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  childrenColor: PropTypes.string,
  bgColor: PropTypes.string,
  shadow: PropTypes.bool,
}
