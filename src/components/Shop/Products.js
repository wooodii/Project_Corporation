import ProductDummy from "../../database/ProductDummy";
import ProductItem from '../Shop/ProductItem';

const Products = (props) =>{
    
    return (
        <section>
            <h2>좋아하는 상품을 구매하세요!</h2>
            <ul>
                {ProductDummy.map((p) => (
                    <ProductItem/>
                ))}
            </ul>
        </section>
    )
}

export default Products; 