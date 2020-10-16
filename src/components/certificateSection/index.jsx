import { Container } from './styles'

export default function CertificateSection(props) {
  return (
    <Container>
      <div className="texture-left">
        <img src="assets/background/texture-top-left.svg" alt="texture" />
        <img src="assets/background/texture-bottom-left.svg" alt="texture" />
      </div>
      <div className="content-center">
        <div className="content-center-header max-header" data-aos="fade-up">
          <h3>Certificado</h3>
          <h4>
            Receba seu certificado com código de autenticidade em PDF após 35
            dias de curso!
          </h4>
        </div>
        <img src="assets/certificate.svg" alt="certificate" />
      </div>
      <div className="texture-right">
        <img src="assets/background/texture-top-right.svg" alt="texture" />
        <img src="assets/background/texture-bottom-right.svg" alt="texture" />
      </div>
    </Container>
  )
}
