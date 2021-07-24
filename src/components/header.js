import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
        className="mx-auton p-3.5 flex flex-row"
    >
        <Link
          to="/"
            className="no-underline"
        >
            <StaticImage
    className="w-40"
            src="../images/ninilogo.png"
            alt="nini-logo-website-main"
            />
        </Link>
        <div className="flex items-center space-x-4 ml-auto w-auto inline-block text-white no-underline">
            <Link to="/" className="">
                Home
            </Link>
            <Link to="/designs" className="">
                Diseños
            </Link>
            <Link to="/about-us" className="">
                Sobre nosotros
            </Link>
            <Link to="/contact-us" className="">
                Contáctanos
            </Link>
        </div>
    </div>
  </header>
)

export default Header
