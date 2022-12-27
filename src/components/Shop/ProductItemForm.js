import Input from "../UI/Input";
// input요소에 대한 내장 props
const ProductItemForm = (props) => {
    return(
        <>
        <form>
            <Input label="Amount" input={{
                id  : 'amount_' + props.id,
                type : 'number', 
                main : '1',
                max : "5",
                step : "1",
                defaultValue : '1'
            }}/>
            <button>장바구니 추가</button>
        </form>
        </>
    )
}

export default ProductItemForm;