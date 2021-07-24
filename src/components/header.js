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
            src="../images/nini-logo.png"
            width={200}
            alt="nini-logo-website-main"
            />
        </Link>
        <div className="ml-auto w-1/3 inline-block">
            <Link to="/" className="text-white no-underline">
                Home
            </Link>
            <Link to="/designs">
                Diseños
            </Link>
            <Link to="/contact-us">
                Contáctanos
            </Link>
        </div>
    </div>
  </header>
)

export default Header
