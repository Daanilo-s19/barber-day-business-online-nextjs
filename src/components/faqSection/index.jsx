import { useState } from 'react'
import Button from '../Button'
import { Container } from './styles'

export default function FaqSection(props) {
  const { item } = props
  const [itemDropdown, setItemDropdown] = useState(null)
  return (
    <Container>
      <div className="content-center-header max-header" data-aos="fade-up">
        <h3>FAQ</h3>
        <h4>Perguntas frequentes</h4>
      </div>
      <div className="content">
        {item &&
          item.map((element, idx) => (
            <div
              key={idx}
              className="item-dropdown"
              onClick={() =>
                itemDropdown == idx
                  ? setItemDropdown(null)
                  : setItemDropdown(idx)
              }
            >
              <p>{element.title}</p>
              <img
                src={
                  itemDropdown == idx ? 'assets/less.svg' : 'assets/more.svg'
                }
                alt="more"
              />
              {itemDropdown == idx && (
                <div className="description">
                  <span>{element.description}</span>
                </div>
              )}
            </div>
          ))}
        <Button
          width="332px"
          image="assets/arrow_right.svg"
          bgColor="#2A9E98"
          childrenColor="#F0F4FA"
          shadow={true}
          bgHover="rgba(42, 158, 152, 1)"
          onClick={() => onChange(true)}
        >
          Alavancar minha barbearia agora
        </Button>
      </div>
    </Container>
  )
}
