import style from './ContactPage.module.css';
import { TbPhoneCall,TbPrinter,TbMail  } from "react-icons/tb";

const ContactPage = () => {
    return (
        <ul className={style.wrap}>
        <li className={style.contents1}>
            
            <div className={style.cnt_title1}>
            Contact Us
            </div>

            <div className={style.tower}>
                13F, East Centeral Tower, 1077 
            </div>
            
            <div className={style.name}>
                서울 강동구, 05340
            </div>

            <div className={style.info}>
                <li> 
                    <TbPhoneCall/>
                    <span>
                    822.6364.7643
                    </span>
                </li>
                <li> <TbPrinter/>
                    <span>
                        822.6364.7609
                    </span></li>
                <li><TbMail/> 
                <span>
                rjhun84@hyundalic.com
                </span></li>
            </div>

            <div className={style.backhome}>
                BACK TO HOME
            </div>
        </li>

        <li className={style.content2}>
            <div>회사명</div>
            <div>이름</div>
            <div>이메일</div>
            <div>요청내용</div>
        </li>
        </ul>
    );
}
 
export default ContactPage;