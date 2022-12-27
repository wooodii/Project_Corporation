import ProductItemForm from "./ProductItemForm";

const ProductItems = (props) =>{
    // const price = `$${props.price.toFixed(2)}`; 
    // `$${ProductDummy.map((p) => (p.price.toFixed(2)))}`;
    
    return (
        <li style={{listStyle : "none"}}>
            <div>
                <h3>{props.product.title}</h3>
                <div>{props.product.discription}</div>
                <div>{props.product.price}</div> 
            </div>
            <div>
                <ProductItemForm id={props.id}/>
            </div>
        </li>
    )
}

export default ProductItems; 