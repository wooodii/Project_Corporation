import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../Modules/uiSlice";

const CartBtn = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
    
    const CartToggle = () => {
        dispatch(uiAction.toogle())
    }

    return (
        <>
            <button onClick={CartToggle}>
                <span>장바구니</span> {" "}
                <span>{cartQuantity}</span>
            </button>
        </>
    );
}
 
export default CartBtn;