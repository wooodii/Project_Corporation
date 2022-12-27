import classes from '../UI/Modal.module.css';

// 모달 오버레이 뒤에 있는 페이지 나머지 부분과 상호작용 막기

const Backdrop = props => {
    return <div></div>
};


const ModalOverlay = (props) => {
    return (
        <div>
            <div>{props.children}</div>
        </div>
    );
}
 

const Modal = (props) => {};

export default Modal;