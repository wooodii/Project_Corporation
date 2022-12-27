import ProductItemForm from "./ProductItemForm";

const ProductItems = (props) =>{
    // const price = `$${props.price.toFixed(2)}`; 
    // `$${ProductDummy.map((p) => (p.price.toFixed(2)))}`;
    // productlist에 담아서 변수로 가져오는 거랑, dummy파일 채로 가지고 오는 거 차이?
    
    return (
        <li>
            <div>
                {/* <h3>{props.product.title}</h3>
                <div>{props.prpduct.discription}</div>
                <div>{props.product.price}</div> */}
            </div>
            <div>
                <ProductItemForm id={props.id}/>
            </div>
        </li>
    )
}

export default ProductItems; 