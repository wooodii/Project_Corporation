import { Navbar } from 'react-bootstrap';
import style from './Home.module.css';
import { TfiHarddrives, TfiTruck, TfiHeadphoneAlt } from "react-icons/tfi";
import { IconContext } from "react-icons";
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import ThreeApp from '../shaders/ThreeApp';
import { useEffect, useRef, useState } from 'react';
import CountUp from "react-countup";

const Home = () => {
    const navigate = useNavigate();
     const ref = useRef(null);
     const [ctx, setCtx] = useState();

     useEffect(() => {
         const canvas = ref.current
         const context = canvas.getContext('2d');
         setCtx(context)
     }, [])

    const homeimg = [
        {id : 1, img : "home01.webp", des1 : "한샘 유로5 프레임우드"},
        {id : 2, img : "home02.webp", des1 : "한샘 유로4 프레임오크"},
        {id : 3, img : "home03.webp", des1 : "한샘 유로5 매니쉬모던"},
    ]

    
    return (
        <div className={style.app}>
            <div className={style.intro_bg}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div>
                <canvas ref={ref}  width="150" height="150"></canvas>
                </div>
                <div className={style.intro_text}>
                    <h1> 혼자 하는 고민은 시간만 늦출 뿐 </h1>
                    <h4 className={style.contents}> 
                    궁금한 점은 곧바로 전문가와 이야기하세요 </h4>
                </div>
            </div>
            
            <div className={style.align}>
            <ul className={style.amount}>
                <li>
                    <div>
                        <p> 
                            <span className={style.subtitle1}> 
                                리모델링 패키지 
                            </span> 
                            <br/>
                           <span className={style.subtitle2}>
                             <CountUp duration={3} 
                             className="counter" end={140}/>
                             건 
                            </span> 
                        </p>
                    </div>
                </li>
                <li>
                <div>
                    <p> 
                       <span className={style.subtitle1}> 리모델링 상품  </span><br/> 
                        <span className={style.subtitle2}> 
                        <CountUp duration={3} 
                             className="counter" end={930}/>
                             개
                        </span>
                    </p>
                </div>
                </li>
                <li>
                <div>
                        <p>
                            <span className={style.subtitle1}> 가구</span><br/>
                            <span className={style.subtitle2}> 
                            <CountUp duration={3} 
                             className="counter" end={800}/>
                             여개</span> 
                        </p>
                </div>
                </li>
                <li>
                <div>
                        <p>
                            <span className={style.subtitle1}> 홈케어</span> <br/>
                            <span className={style.subtitle2}> 
                            <CountUp duration={3} 
                             className="counter" end={400}/>
                             건 </span>                       
                        </p>
                </div>
                </li>
            </ul>
            </div>

            <div className={style.main_text0}>
                <h1>ABOUT</h1>
                <div className={style.contents1}>
                    실제 주거환경에 맞춘 공간디자인을 제안합니다. <br/>
                    한샘에서 가족의 재충전 공간을 설계해보세요.
                </div>

                <ul className={style.icons}>
                    <li>
                        <div className={style.icon}>
                        <IconContext.Provider value={{ size : "5em"}}>
                            <TfiHarddrives/>
                        </IconContext.Provider>
                        </div>
                        <div className={style.icon_title}>
                            만족스런 리모델링
                        </div>
                        <div className={style.icon_text}>
                            1800여개 시공사례를 보유한 리모델링 아카이브
                        </div>
                        <button className={style.more}>
                                MORE 
                        </button>
                    </li>
                    <li>
                     <div  className={style.icon}>
                        <IconContext.Provider value={{ size : "5em"}}>
                            <TfiTruck/>
                        </IconContext.Provider>
                        </div>
                        <div className={style.icon_title}>
                            신속/원활한 배송
                        </div>
                        <div className={style.icon_text}>
                            안전한 가구 및 자재배송 보장
                        </div>
                        <button className={style.more}>
                            MORE
                        </button>
                    </li>
                    <li>
                        <div  className={style.icon}>
                        <IconContext.Provider value={{ size : "5em"}}>
                             <TfiHeadphoneAlt/>
                        </IconContext.Provider>
                        </div>
                        <div className={style.icon_title}>
                            전문상담서비스
                        </div>
                        <div className={style.icon_text}>
                            실제 주거환경에 맞춘 공간디자인 제안
                        </div>
                        <button className={style.more}>
                            MORE
                        </button>
                    </li>
                </ul>

            </div>

            <div className={style.main_text1}>
                <h1 style={{fontWeight : "bold"}}>SERVICE</h1>
                <div>전문가의 손길을 거친 다양한 시공사례를 확인해보세요</div>
                <div className={style.service}>
                <Carousel fade className={style.slider}>
                {homeimg.map((i ,index) => (
                    <Carousel.Item>
                        <img width="90%" height="700em" src={require(`../asset/${i.img}`)} alt="First slide"/>
                        <Carousel.Caption>
                          <h3>{i.des1}</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>))}
                </Carousel>
                </div>
            </div>

            <div className={style.main_text2}>
            </div>

            <div className={style.main_text3}>
                    <li className={style.main_text3_bg}>
                        <div>
                            <h1 style={{marginTop : "1.7em"}}>CONTACT</h1>
                            <p>
                            우리에게 파트너십을 신청하거나, 고객이 되어주세요
                            </p>
                            <button onClick={() => (
                                navigate('/contact')
                            )} className={style.context_btn}>
                                더 알아보기
                            </button>
                        </div>
                        <div style={{backgroundColor : "gray", opacity : "90%"}}>

                        </div>
                    </li>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;    