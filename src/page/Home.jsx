import { Navbar } from 'react-bootstrap';
import style from './Home.module.css';

const Home = () => {

    return (
        <div className={style.app}>
            <div className={style.intro_bg}>
                <div className={style.header}>
                    <Navbar/>
                </div>

            <div className={style.intro_text}>
                <h1> 혼자 하는 고민은 시간만 늦출 뿐 </h1>
                <h4 className={style.contents}> 
                궁금한 점은 곧바로 전문가와 이야기하세요 </h4>
            </div>


            <ul className={style.amount}>
                <li>
                    <div>
                        <p> 리모델링 패키지 
                            <br/>
                           <span> span </span> 
                        </p>
                    </div>
                </li>
                <li>
                <div>
                    <p> 리모델링 상품 <br/> 
                    <span> span </span>
                    </p>
                </div>
                </li>
                <li>
                <div>
                        <p> 가구 <br/>span</p>
                </div>
                </li>
                <li>
                <div>
                        <p> 홈케어<br/>span</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
    );
}

export default Home;    