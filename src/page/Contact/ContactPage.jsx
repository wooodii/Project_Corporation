import style from './ContactPage.module.css';
import { TbPhoneCall,TbPrinter,TbMail  } from "react-icons/tb";
import { IconContext } from "react-icons";

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
                    <IconContext.Provider value={{ size : "1.3em"}}>
                    <TbPhoneCall/>
                    </IconContext.Provider>
                    <span className={style.icons}>
                    822.6364.7643
                    </span>
                </li>
                <li> 
                <IconContext.Provider value={{ size : "1.3em"}}>
                    <TbPrinter/>
                </IconContext.Provider>

                    <span className={style.icons}>
                        822.6364.7609
                    </span></li>
                <li>
                <IconContext.Provider value={{ size : "1.3em"}}>
                    <TbMail/> 
                </IconContext.Provider>
                <span className={style.icons}>
                rjhun84@hyundalic.com
                </span></li>
            </div>

            <div className={style.backhome}>
                BACK TO HOME
            </div>
        </li>

        <li className={style.content2}>
            <ul>
                <span>
                    <p style={{marginTop : "0.5em"}}>
                회사명
                    </p>
                </span>
                <input className={style.input_contact}  
                type="text" style={{width : "100%", height : "100%"}} />    
            </ul>
            <ul>
                <span>
                    <p style={{marginTop : "0.5em"}}>
                신청인
                    </p>
                </span>
                <input className={style.input_contact} 
                type="text" style={{width : "100%", height : "100%"}} />    
            </ul>
            <ul>
                <span>
                    <p style={{marginTop : "0.5em"}}>
                이메일
                    </p>
                </span>
                <input className={style.input_contact} 
                type="text" style={{width : "100%", height : "100%"}} />    
            </ul>
            <ul className={style.order}>
                <span>
                    <p style={{marginTop : "0.5em"}}>
                주문건
                    </p>
                </span>
                <input className={style.input_contact} 
                type="text" style={{width : "100%", height : "100%"}} />    
            </ul>

            <div className={style.inputbox}>
                <input type="checkbox" name="" id="inputInfo" width="25px"/>
                <label for="inputInfo"> 해당 정보수집과 개인정보 수집에 동의합니다.</label> 
            </div>
        
            <div className={style.contact_btn}>
                Contact Us
            </div>
        </li>
        </ul>
    );
}
 
export default ContactPage;