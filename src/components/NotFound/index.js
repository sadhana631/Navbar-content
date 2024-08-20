import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const NotFoundContextClassName = isDarkTheme
        ? 'not-found-content-text-light'
        : 'not-found-content-text-dark'

      return (
        <div className={`not-found-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="not-found-responsive-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1
                className={`not-found-heading ${NotFoundContextClassName}`}
              ></h1>
              <p
                className={`not-found-content ${NotFoundContextClassName}`}
              ></p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
