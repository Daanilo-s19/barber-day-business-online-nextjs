import { useState } from 'react'
import Timer from 'react-compound-timer'
import PropTypes from 'prop-types'
import { Navbar, Dropdown } from './styles'

export default function Menu(props) {
  const date = new Date('oct 20 2020')
  const now = new Date()
  return (
    <>
      <Navbar data-aos="fade-down">
        <div className="content">
          <div className="content-logo">
            <img src="assets/logo.svg" alt="logan" />
          </div>
          <div className="content-countdown">
            <label>As inscrições se encerram em:</label>
            <Timer
              initialTime={date.getTime() - now.getTime()}
              direction="backward"
            >
              {() => (
                <div className="countdown">
                  <div>
                    <h4>
                      <Timer.Days />
                    </h4>
                    <span>Dias</span>
                  </div>
                  <div>
                    <h4>
                      <Timer.Hours />
                    </h4>
                    <span>Horas</span>
                  </div>
                  <div>
                    <h4>
                      <Timer.Minutes />
                    </h4>
                    <span>Minutos</span>
                  </div>
                  <div>
                    <h4>
                      <Timer.Seconds />
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
