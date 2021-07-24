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
            src="https://i.ibb.co/1Gyk1dg/nini-logo.png"
            width={200}
            alt="nini-logo-website-main"
            />
        </Link>
        <div className="ml-auto w-1/3 inline-block text-white no-underline">
            <Link to="/nini-website" className="px-3">
                Home
            </Link>
            <Link to="/nini-website/designs" className="px-3">
                Diseños
            </Link>
            <Link to="/nini-website/contact-us" className="px-3">
                Contáctanos
            </Link>
        </div>
    </div>
  </header>
)

export default Header
