import { Container } from './styles'

export default function CertificateSection(props) {
  const { title, subtitle } = props
  return (
    <Container>
      <div className="texture-left">
        <img
          data-aos="zoom-in-up"
          src="assets/texture-top-left.svg"
          alt="texture"
        />
        <img
          data-aos="zoom-in-up"
          src="assets/texture-bottom-left.svg"
          alt="texture"
        />
      </div>
      <div className="content-center">
        <div className="content-center-header max-header" data-aos="fade-up">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
        </div>
        <img src="assets/certificate.webp" alt="certificate" />
      </div>
      <div className="texture-right">
        <img
          data-aos="zoom-in-up"
          src="assets/texture-top-right.svg"
          alt="texture"
        />
        <img
          data-aos="zoom-in-up"
          src="assets/texture-bottom-right.svg"
          alt="texture"
        />
      </div>
    </Container>
  )
}
