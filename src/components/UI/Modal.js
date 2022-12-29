import classes from '../UI/Modal.module.css';
import  ReactDOM  from 'react-dom';

// 모달 오버레이 뒤에 있는 페이지 나머지 부분과 상호작용 막기
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}
 
const potalElement = document.getElementById('overlays');

const Modal = (props) => {
    return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, potalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, potalElement)}
    </>
};

export default Modal;