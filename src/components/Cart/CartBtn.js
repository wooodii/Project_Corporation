import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";


// prop chain의 경우, > nav > app.js
const CartBtn = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={props.onClick}>
                <span onClick={() => (navigate('/cart'))}>
                <span><CartIcon/></span>
                <span>3</span>
                </span>
            </button>
        </>
    );
}
 
export default CartBtn;