import ProductDummy from "../../database/ProductDummy";

const AvailableProducts = () => {
    const ProductList = ProductDummy.map((p) => <li>{p.title}</li>);
    return (
        <>
            {ProductList}
        </>
    );
}
 
export default AvailableProducts;