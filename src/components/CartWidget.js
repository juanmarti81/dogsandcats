import {GrCart} from "react-icons/gr";

const CartWidget = () => {
  return(
      <div className="flex flex-col items-center">
          <div className="text-lg"><GrCart/></div>
          <div className="text-sm font-Jura uppercase">Cart</div>
      </div>
  )
}

export default CartWidget