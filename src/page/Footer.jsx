import style from './Footer.module.css';
import logo1 from '../asset/logo/한샘글자.png';

const Footer = () => {
    return (
        <div className={style.wrap}>
            <div className={style.company}>
            <img src={logo1} width="300px" alt="logo image" />
            
            </div>
            <div className={style.info}>
            사업자등록번호 : 133-81-22865 | 대표자 : 김진태 | 주소 : 425-110 경기도 안산시 성곡동 665 
            <br/>잠실점 02-3430-6911 | 논현점 02-542-8558 | 방배점 02-6202-7732 | 목동점02-6344-7000
            <br/>용산아이파크몰점 02-6373-3500 | 상봉점 02-6244-5000 | 마포점 02-6358-0175
            <br/>분당점 031-719-3100 | 기흥점 031-307-0430 | 수원광교점 031-888-0800 | 하남스타필드점 031-8072-8955
            <br/>고양스타필드점 031-5173-0447 | 안성스타필드점 031-8029-1770
            <br/>전주점 063-240-9300
            <br/>대구범어점 053-749-8500
            <br/>부산센텀점 051-790-8500 | 롯데광복점 051-897-1382 | 롯데메종동부산점 051-926-1970
            <br/>롯데동래점 051-921-3701
            <br/>울산점 052-914-4301
            <br/> 
            <br/>
            <span 
                style={{fontSize : "1.2em"}}> Copyright © 2019 HANSSEM Co. Ltd. All rights reserved </span>
            </div>
        </div>
    );
}
 
export default Footer;