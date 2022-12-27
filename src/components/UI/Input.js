const Input = (props) => {

    // 구문을 통해서 props으로 인풋에 추가됨 
    return (
        <>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} />
        </>
    );
}
 
export default Input;