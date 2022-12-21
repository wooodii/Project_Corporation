import CartBtn from "../Cart/CartBtn";

const Layout = (props) => {
    return (
        <>
        <header style={{display : "flex"}}> 
            <h3>내 장바구니</h3>
            <CartBtn/> 
        </header>
        <hr/>
        
        <main>{props.children}</main>
        </>
    );
}
 
export default Layout;