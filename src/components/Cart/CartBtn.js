import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";

const CartBtn = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => (navigate('/cart'))}>
                <span><CartIcon/></span>
                <span>3</span>
            </button>
        </>
    );
}
 
export default CartBtn;