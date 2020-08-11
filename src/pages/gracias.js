import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>¡Compra exitosa!</h2>
        <p>
          Espero tu experiencia de compra haya sido de lo mejor, te esperamos
          pronto
        </p>
        <span rol="img" aria-label="emoji">
          ❤
        </span>
        <Link to="/">
          <Button>Volver al Inicio</Button>
        </Link>
      </Purchase>
    </div>
  )
}
