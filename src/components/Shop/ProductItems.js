import ProductDummy from "../../database/ProductDummy";
import ProductItemForm from "./ProductItemForm";

const ProductItems = () =>{
    const price = `$${ProductDummy.map((p) => (p.price.toFixed(2)))}`;

    // productlist에 담아서 변수로 가져오는 거랑, dummy파일 채로 가지고 오는 거 차이?
    return (
        <section>
            <h2>좋아하는 상품을 구매하세요!</h2>
            <div>
                {ProductDummy.map((p) => (
                        <li>{p.title}
                        {p.discription}
                        {price}</li>
                ))}
            </div>
            <div>
                <ProductItemForm/>
            </div>
        </section>
    )
}

export default ProductItems; 