import Button from '../Button'
import { Container } from './styles'

export default function PriceSection(props) {
  return (
    <Container>
      <div className="content-center-header max-header" data-aos="fade-up">
        <h4>
          Quanto custa o<br />
          Barber Day Business Online?
        </h4>
      </div>
      <div className="content" data-aos="fade-up">
        <div className="descripiton">
          <div className="item">
            <span>
              Consultoria com <b>Contador especialista</b> em{' '}
              <b>Contabilidade de Barbearia</b>
            </span>
            <b className="decoration">R$ 1.500,00</b>
          </div>
          <div className="item item-zebra">
            <span>
              Consultoria com <b>Advogado especialista</b> na parte{' '}
              <b>Jurídica de Barbearia</b>
            </span>
            <b className="decoration">R$ 1.500,00</b>
          </div>
          <div className="item">
            <span>
              Consultoria com <b>Publicitário especialista</b> em{' '}
              <b>Marketing de Barbearia</b>
            </span>
            <b className="decoration">R$ 1.500,00</b>
          </div>
          <div className="item item-zebra">
            <span>
              Consultoria com <b>Gestor especialista</b> em{' '}
              <b>Administração de Barbearia</b>
            </span>
            <b className="decoration">R$ 1.500,00</b>
          </div>
          <div className="item">
            <span>
              Consultoria com <b>Barbeiro lider</b> de equipe e{' '}
              <b>Educador reconhecido</b>
            </span>
            <b className="decoration">R$ 1.500,00</b>
          </div>
          <div className="item item-zebra">
            <span>
              Consultoria de empreendedorismo com <b>Seu Elias</b>, fundador da{' '}
              <b>barbearia Seu Elias</b>
            </span>
            <b className="decoration">R$ 1.500,00</b>
          </div>
          <div className="bonus">
            <span>
              <b>BÔNUS:</b> Consultoria de vendas e gestão (para barbearias)
              <br />
              com <b>Bruno Vanenck,</b> fundador da{' '}
              <b>barbearia Corleone - R$5.000,00</b>
            </span>
          </div>
          <div className="total">
            <label>Total</label>
            <label className="decoration">R$ 12.500,00</label>
          </div>
        </div>
        <div className="price">
          <p>Você paga apenas</p>
          <label>
            12x de <b>143,00</b>
          </label>
          <Button
            width="332px"
            image="assets/arrow_right.svg"
            bgColor="#D5FAEB"
            childrenColor="#2A9E98"
            shadow={true}
            bgHover="#fff"
            onClick={() => onChange(true)}
          >
            Alavancar minha barbearia agora
          </Button>
        </div>
        <span className="span">
          Para ter acesso a todo esse conteúdo,{' '}
          <b>com os maiores especialistas do Brasil,</b>
          <br /> que você não encontra em nenhum outro lugar.
        </span>
      </div>
    </Container>
  )
}
