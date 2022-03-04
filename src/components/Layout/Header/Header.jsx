import { Fragment } from "react"
import mealsJpg from "../../../assets/meals.jpg"

import classes from "./Header.module.css"
import Cart from "../../Cart/Cart"

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Cibo</h1>
        <Cart />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsJpg} alt="Un tavolo pieno di cibo delizioso!" />
      </div>
    </Fragment>
  )
}

export default Header
