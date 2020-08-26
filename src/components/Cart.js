import React, { useContext } from "react"
import { Link } from "gatsby"
import priceFormat from "../utils/priceFormat"
import { Button, StyledCart } from "../styles/components"
import { CartContext } from "../context"

export default function Cart() {
  const { cart } = useContext(CartContext)
  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.product.metadata.img} alt={item.product.name} />{" "}
                {item.product.name}
              </td>
              <td>USD {priceFormat(item.unit_amount)}</td>
              <td>{item.quantity}</td>
              <td>{priceFormat(item.quantity * item.item.unit_amount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small></small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}
