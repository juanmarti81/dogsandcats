import {GrCart} from "react-icons/gr";

const CartWidget = () => {
  return(
      <div className="flex flex-col items-center gap-y-1">
          <div className="text-lg"><GrCart/></div>
          <div className="text-sm font-light font-Poppins uppercase">Cart</div>
      </div>
  )
}

export default CartWidget