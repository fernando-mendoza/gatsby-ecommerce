import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function cancelacion() {
  return (
    <div>
      <SEO title="Cancelacion de compra" />
      <Purchase>
        <h2>Cancelacion de compra con exito</h2>
        <p>
          La cancelacion de compra ha sido exitosa, esperamos verte por aqui
          pronto
        </p>
        <span role="img" aria-label="emoji">
          😪
        </span>
        <Link to="/">
          <Button>Volver al Inicio</Button>
        </Link>
      </Purchase>
    </div>
  )
}
