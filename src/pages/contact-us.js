import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactUs = () => (
  <Layout>
    <Seo title="Contact us" />
    <div className="shadow-md p-4 bg-white rounded-lg h-18 flex flex-row">
        <div>
            <h2 className="font-serif">DATOS DE CONTACTO</h2>
            <p className="font-serif"><b>Dirección:</b></p>
            <p className="font-serif">Loma El Tesoro con Transveral Superior</p>
            <p className="font-serif">Carrera: 25A # 1A Sur - 45</p>
            <p className="font-serif">Local: 1604 - 1607</p>
            <p className="font-serif">Piso: 1S</p>
            <p className="font-serif">Teléfonos: (034) 322-8505 - 3146084536</p>
        </div>
                <div className="ml-auto" dangerouslySetInnerHTML={{ __html: `<iframe src=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5001658720425!2d-75.56102378554215!3d6.197548028586808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46829a65a5d1ab%3A0xacb563511f221ff3!2sEl%20Tesoro%20Shopping%20Park!5e0!3m2!1sen!2sco!4v1627346373535!5m2!1sen!2sco" width="500" height="400" allowfullscreen="" loading="lazy" />` }} />
    </div>
  </Layout>
)

export default ContactUs
