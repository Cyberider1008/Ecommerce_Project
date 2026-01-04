import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Navbar(){
    const {cartItems} =useCart();

    const CartCount  = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav>
            <Link to ="/"> AshishCart </Link>
            <Link to ="/cart"> Cart{CartCount > 0 && ` (${CartCount})`}
             </Link>
        </nav>
    )
}

export default Navbar;