import { useState } from 'react'
import Timer from 'react-compound-timer'
import PropTypes from 'prop-types'
import { Navbar, Dropdown } from './styles'

export default function Menu(props) {
  const { title, datefinal } = props
  const now = new Date()
  return (
    <>
      <Navbar data-aos="fade-down">
        <div className="content">
          <div className="content-logo">
            <img src="assets/logo.svg" alt="logan" />
          </div>
          <div className="content-countdown">
            <label>{title}</label>
            <Timer initialTime={datefinal - now.getTime()} direction="backward">
              {() => (
                <div className="countdown">
                  <div>
                    <h4>
                      <Timer.Days
                        formatValue={(value) =>
                          `${value < 10 ? `0${value}` : value}`
                        }
                      />
                    </h4>
                    <span>Dias</span>
                  </div>
                  <div>
                    <h4>
                      <Timer.Hours
                        formatValue={(value) =>
                          `${value < 10 ? `0${value}` : value}`
                        }
                      />
                    </h4>
                    <span>Horas</span>
                  </div>
                  <div>
                    <h4>
                      <Timer.Minutes
                        formatValue={(value) =>
                          `${value < 10 ? `0${value}` : value}`
                        }
                      />
                    </h4>
                    <span>Minutos</span>
                  </div>
                  <div>
                    <h4>
                      <Timer.Seconds
                        formatValue={(value) =>
                          `${value < 10 ? `0${value}` : value}`
                        }
                      />
                    </h4>
                    <span>segundos</span>
                  </div>
                </div>
              )}
            </Timer>
          </div>
        </div>
      </Navbar>
    </>
  )
}
Menu.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
}
