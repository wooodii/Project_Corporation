import ProductDummy from "../../database/ProductDummy";

const Products = (props) =>{
    
    return (
        <section>
            <h2>좋아하는 상품을 구매하세요!</h2>
            <ul>
                {ProductDummy.map((p) => (
                    p
                ))}
            </ul>
        </section>
    )
}

export default Products; 