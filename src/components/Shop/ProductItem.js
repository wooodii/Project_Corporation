import { createAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import Card from '../../components/UI/Card';

const ProductItem = (props) => {
    const {title, price, description, id} = props;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(createAction.addItemToCart({
            id, title, price
        }))
    }

    return (
        <li>
            <Card>
                <header>
                    <h3>제품이름</h3>
                    <div>가격</div>
                </header>
                <p> 제품상세내용</p>
                <div>
                    <button onClick={addToCartHandler}>장바구니에 추가</button>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem;