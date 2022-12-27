import Card from "../UI/Card";

const Cart = () => {
    const cartItems = <ul>{[{
        id : 'c1', name : "셔츠", amount : "2", price : "12"
    }].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <>
            {cartItems}
            <div>
                <span>총 가격</span>
                <span>35.62</span>
            </div>
            <div>
                <button>x</button>
                <button>넣기</button>
            </div>
        </>
    );
}
 
export default Cart;