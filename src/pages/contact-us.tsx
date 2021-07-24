import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactUs = () => (
  <Layout>
    <Seo title="Home" />
    <div className="shadow-md p-4 bg-white rounded-lg h-18">
    <h2>DATOS DE CONTACTO</h2>
    <p className=""><b>Dirección:</b></p>
    <p>Loma El Tesoro con Transveral Superior</p>
    <p>Carrera: 25A # 1A Sur - 45</p>
    <p>Local: 1604 - 1607</p>
    <p>Piso: 1S</p>
    <p>Teléfonos: (034) 322-8505 - 3146084536</p>
    </div>
  </Layout>
)

export default ContactUs
