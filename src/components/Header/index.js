import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navCont">
    <div className="titleAndLogoCont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="imgEdit1"
        alt="wave"
      />
      <h1 className="headEdit1">Wave</h1>
    </div>
    <ul className="headerCont">
      <li className="listEdit">
        <Link className="linkEdit" to="/">
          Home
        </Link>
      </li>
      <li className="listEdit">
        <Link className="linkEdit" to="/about">
          About
        </Link>
      </li>
      <li className="listEdit">
        <Link className="linkEdit" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
