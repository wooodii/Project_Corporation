import ProductDummy from "../../database/ProductDummy";

const ProductItems = (props) =>{
    // productlist에 담아서 변수로 가져오는 거랑, dummy파일 채로 가지고 오는 거 차이?
    return (
        <section>
            <h2>좋아하는 상품을 구매하세요!</h2>
            {ProductDummy.map((p) => (
                    <li>{p.title}
                    {p.discription}
                    {p.price}</li>
            ))}
        </section>
    )
}

export default ProductItems; 