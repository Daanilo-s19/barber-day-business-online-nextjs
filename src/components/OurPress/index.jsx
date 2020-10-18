import PropTypes from 'prop-types'
import SectionDefault from '../SectionDefault'
import { ItemPress, Content } from './styles'
import { useState, useEffect } from 'react'
import Button from '../Button'
import CarouselController from '../CarouselController'

export default function PressSection(props) {
  const { title, subtitle, item } = props
  const [controller, setController] = useState(0)
  useEffect(() => {
    blogMobile()
  }, [])

  const blogMobile = () => {
    let arrays = []
    item &&
      item.forEach((element) => {
        element.forEach((item) => {
          arrays.push(item)
        })
      })
    return arrays
  }
  return (
    <>
      <SectionDefault title={title} subtitle={subtitle}>
        {item &&
          item.map((list, index) => {
            return (
              controller % item.length === index &&
              list.map((element, index) => (
                <div key={index} className="content-web">
                  <ItemPress key={index}>
                    <div>
                      <iframe
                        width="352"
                        height="198"
                        src={element.link}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="content">
                      <label>{element.title}</label>
                      <p>{element.description}</p>
                    </div>
                  </ItemPress>
                </div>
              ))
            )
          })}

        <div className="content-mobile">
          {item &&
            blogMobile().map((element, index) => {
              return (
                controller % blogMobile().length === index && (
                  <ItemPress key={index}>
                    <div className="content-video">
                      <iframe
                        width="352"
                        height="198"
                        src={element.link}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div className="content">
                      <label>{element.title}</label>
                      <p>{element.description}</p>
                    </div>
                  </ItemPress>
                )
              )
            })}
        </div>
      </SectionDefault>
      <Content>
        <div className="content-web">
          <CarouselController
            dots={true}
            index={(item ? controller % item.length : 0) + 1}
            totalItem={item.length}
            item={item || []}
            back={() => setController(controller - 1)}
            skip={() => setController(controller + 1)}
          />
        </div>
        <div className="content-mobile">
          <CarouselController
            dots={true}
            index={(blogMobile() ? controller % blogMobile().length : 0) + 1}
            totalItem={blogMobile().length}
            item={blogMobile() || []}
            back={() => setController(controller - 1)}
            skip={() => setController(controller + 1)}
          />
          {screen.width <= 425 && (
            <Button
              width="332px"
              image="assets/arrow_right.svg"
              bgColor="#2A9E98"
              childrenColor="#F0F4FA"
              shadow={true}
              bgHover="rgba(42, 158, 152, 0.6)"
              onClick={() => onChange(true)}
            >
              Alavancar minha barbearia agora
            </Button>
          )}
        </div>
      </Content>
    </>
  )
}
PressSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  item: PropTypes.any.isRequired,
  more: PropTypes.string,
}
