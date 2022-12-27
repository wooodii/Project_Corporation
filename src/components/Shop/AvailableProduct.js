import ProductDummy from "../../database/ProductDummy";
import Card from "../UI/Card";
import ProductItems from "./ProductItems";

const AvailableProducts = () => {
    const ProductList = ProductDummy.map((p) => (
        <ProductItems key={p.id} prodcut={p}/>));

    return (
        <>
        <Card>
            {ProductList}
        </Card>
        </>
    );          
} 
 
export default AvailableProducts;