import Card from "../UI/Card";
import Modal from "../UI/Modal";

const CartComp = (props) => {
    const cartItems = <ul>{[{
        id : 'c1', name : "셔츠", amount : "2", price : "12"
    }].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal>
            {cartItems}
            <div>
                <span>총 가격</span>
                <span>35.62</span>
            </div>
            <div>
                <button onClick={props.onClose}>x</button>
                <button>넣기</button>
            </div>
        </Modal>
    );
}
 
export default CartComp;