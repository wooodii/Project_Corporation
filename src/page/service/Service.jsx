import spring2021 from '../../asset/2022spring.webp';
import conceptDesign from './concept';
import style from './Service.module.scss';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Footer from '../Footer';

const Service = () => {

  const intro_color = [
    {id : 1, color : "밝은 갈색, 흰색, 베이지색", texture : "나무, 면, 린넨, 라탄",  cha : "가공을 최소화한 자연적인 질감"},
    {id : 2, color : "흰색, 검은색, 회색", texture : "철, 금속, 유리, 가죽, 플라스틱", cha : "안정적인 마감재와 매끈한 직선, 곡선 형태를 띔"},
    {id : 3, color : "밝은 갈색, 흰색, 회색", texture : "나무, 철, 스테인레스, 타일", cha : "자연적인 질감과 인공적인 마감이 혼합됨"},
    {id : 4, color : "짙은 갈색, 검은색", texture : "나무, 가죽, 레이스, 라탄", cha : "오래되어 빛이 바래고 해진 느낌"},
    {id : 5, color : "흰색", texture : "나무, 유리, 페인트", cha : "장식을 최소화하고 여백을 많이 남김"}
  ]
    return (
        <>
        <img src={spring2021} width="100%" height="700px" alt="서비스메뉴바" />
      
       <div style={{fontSize : "40px", padding : "25px 0", marginBottom : "1em",
       fontWeight : "bold",  textAlign : "center", backgroundColor : "#eee"}}>
         한샘에서 가장 인기많은 인테리어 컨셉 BEST 5
      </div>
       
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" style={{marginTop : "3em",}}>
      <Row>
        <Col sm={2}>
          <Nav style={{margin : "10px"}} className="nav_container flex-column" variant="pills"  >
            <Nav.Item >
              <Nav.Link className={style.nav_link} eventKey="first" >
                <p> 내추럴 </p> 
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={style.nav_link} eventKey="second">
                <p> 모던 </p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={style.nav_link} eventKey="three">
                <p> 북유럽 </p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={style.nav_link} eventKey="four">
                <p> 빈티지 & 레트로 </p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={style.nav_link} eventKey="five">
                <p> 미니멀 & 심플 </p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {conceptDesign.filter((i, index) => (i.id == 1)).map((i,index) => (
                <div style={{width : "100vw", height : "100%", margin : "1em"}}>
                  <div style={{fontSize : "60px", fontWeight : "bold", textAlign : "left", }}>
                  {i.des1} <span style={{fontSize : "25px"}}> 자연스러운 </span>
                  </div>  
                  <div style={{textAlign : "left", fontSize : "28px", 
                  marginBottom  : "3em",  marginTop : "1em"}}>
                  <div> - {i.des2}</div>
                  <div> - {i.des3}</div>
                  <div> - {i.des4}</div>
                  </div>

                  <div style={{textAlign : "left"}}>
                  <img style={{marginRight : "1em",}} width="550px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <img style={{marginRight : "1em", marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img2}`)}></img>
                  <img style={{marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  </div>
                </div>
              ))}

              {intro_color.filter((i) => (i.id == 1)).map((i, index) => (
                <div style={{backgroundColor : "#7A5B3D", color : "white", borderRadius : "5px", marginLeft : "0.7em",
                alignItems :"center",  padding : "2em", marginRight : "6.5em"}}>
                    <p style={{display : "inline-block", textAlign : "center", backgroundColor : "white", color  :"#7A5B3D", 
                    fontSize : "25px", border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em",  fontWeight : "bold"}}> 색상 | {i.color} </p> 
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"#7A5B3D", fontSize : "25px", 
                    border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em", fontWeight : "bold"}}> 소재 | {i.texture}</p>
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"#7A5B3D", fontSize : "25px",
                     border : "2px solid white", borderRadius : "5px", padding : "3px 10px",  fontWeight : "bold"}}> 특징 | {i.cha}</p>
                </div>
              ))}

              <div style={{marginTop : "1em", alignItems : "center", padding : "10px", marginBottom : "2em",
                marginRight : "6em", backgroundColor : "#eee", borderRadius : "10px"}}>
            {conceptDesign.filter((i, index) => (i.id == 1)).map((i,index) => (
                <div style={{marginTop: "2em", marginLeft : "2em"}}>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em", borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "14em", marginBottom : "3em",  marginLeft : "1em",
                  textAlign : "left", width : "800px", textAlign : "left"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                  <div style={{display : "flex"}}>
                  <p style={{fontSize : "25px", marginTop : "16em", width : "800px", textAlign : "right", marginRight : "1em"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  <img style={{marginRight : "1em", marginBottom : "3em",borderRadius : "10px"}} width="800px" height="500px" 
                  src={require(`./img/${i.img2}`)}></img>
                  </div>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em",borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "15em", marginBottom : "3em", textAlign : "left", marginLeft : "1em"}}>
                      내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                </div>

              ))}
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            {conceptDesign.filter((i, index) => (i.id == 2)).map((i,index) => (
                <div style={{width : "100vw", height : "100%", margin : "1em"}}>
                  <div style={{fontSize : "60px", fontWeight : "bold", textAlign : "left", }}>
                  {i.des1} <span style={{fontSize : "25px"}}> 현대의 </span>
                  </div>  
                  <div style={{textAlign : "left", fontSize : "28px", 
                  marginBottom  : "3em",  marginTop : "1em"}}>
                  <div> - {i.des2}</div>
                  <div> - {i.des3}</div>
                  <div> - {i.des4}</div>
                  </div>

                  <div style={{textAlign : "left"}}>
                  <img style={{marginRight : "1em",}} width="550px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <img style={{marginRight : "1em", marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img2}`)}></img>
                  <img style={{marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  </div>
                </div>
              ))}

              {intro_color.filter((i) => (i.id == 2)).map((i, index) => (
                <div style={{backgroundColor : "gray", color : "white", borderRadius : "5px", marginLeft : "0.7em",
                alignItems :"center",  padding : "2em", marginRight : "6.5em"}}>
                    <p style={{display : "inline-block", textAlign : "center", backgroundColor : "white", color  :"gray", 
                    fontSize : "25px", border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em",  fontWeight : "bold"}}> 색상 | {i.color} </p> 
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"gray", fontSize : "25px", 
                    border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em", fontWeight : "bold"}}> 소재 | {i.texture}</p>
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"gray", fontSize : "25px",
                     border : "2px solid white", borderRadius : "5px", padding : "3px 10px",  fontWeight : "bold"}}> 특징 | {i.cha}</p>
                </div>
              ))}

              <div style={{marginTop : "1em", alignItems : "center", padding : "10px", marginBottom : "2em",
                marginRight : "6em", backgroundColor : "#eee", borderRadius : "10px"}}>
            {conceptDesign.filter((i, index) => (i.id == 2)).map((i,index) => (
                <div style={{marginTop: "2em", marginLeft : "2em"}}>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em", borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "14em", marginBottom : "3em",  marginLeft : "1em",
                  textAlign : "left", width : "800px", textAlign : "left"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                  <div style={{display : "flex"}}>
                  <p style={{fontSize : "25px", marginTop : "16em", width : "800px", textAlign : "right", marginRight : "1em"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  <img style={{marginRight : "1em", marginBottom : "3em",borderRadius : "10px"}} width="800px" height="500px" 
                  src={require(`./img/${i.img2}`)}></img>
                  </div>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em",borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "15em", marginBottom : "3em", textAlign : "left", marginLeft : "1em"}}>
                      내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                </div>

              ))}
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="three">
            {conceptDesign.filter((i, index) => (i.id == 3)).map((i,index) => (
                <div style={{width : "100vw", height : "100%", margin : "1em"}}>
                  <div style={{fontSize : "60px", fontWeight : "bold", textAlign : "left", }}>
                  {i.des1} <span style={{fontSize : "25px"}}> 북유럽 </span>
                  </div>  
                  <div style={{textAlign : "left", fontSize : "28px", 
                  marginBottom  : "3em",  marginTop : "1em"}}>
                  <div> - {i.des2}</div>
                  <div> - {i.des3}</div>
                  <div> - {i.des4}</div>
                  </div>

                  <div style={{textAlign : "left"}}>
                  <img style={{marginRight : "1em",}} width="550px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <img style={{marginRight : "1em", marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img2}`)}></img>
                  <img style={{marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  </div>
                </div>
              ))}

              {intro_color.filter((i) => (i.id == 3)).map((i, index) => (
                <div style={{backgroundColor : "", color : "white", borderRadius : "5px", marginLeft : "0.7em",
                alignItems :"center",  padding : "2em", marginRight : "6.5em"}}>
                    <p style={{display : "inline-block", textAlign : "center", backgroundColor : "white", color  :"", 
                    fontSize : "25px", border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em",  fontWeight : "bold"}}> 색상 | {i.color} </p> 
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"", fontSize : "25px", 
                    border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em", fontWeight : "bold"}}> 소재 | {i.texture}</p>
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"", fontSize : "25px",
                     border : "2px solid white", borderRadius : "5px", padding : "3px 10px",  fontWeight : "bold"}}> 특징 | {i.cha}</p>
                </div>
              ))}

              <div style={{marginTop : "1em", alignItems : "center", padding : "10px", marginBottom : "2em",
                marginRight : "6em", backgroundColor : "#eee", borderRadius : "10px"}}>
            {conceptDesign.filter((i, index) => (i.id == 3)).map((i,index) => (
                <div style={{marginTop: "2em", marginLeft : "2em"}}>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em", borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "14em", marginBottom : "3em",  marginLeft : "1em",
                  textAlign : "left", width : "800px", textAlign : "left"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                  <div style={{display : "flex"}}>
                  <p style={{fontSize : "25px", marginTop : "16em", width : "800px", textAlign : "right", marginRight : "1em"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  <img style={{marginRight : "1em", marginBottom : "3em",borderRadius : "10px"}} width="800px" height="500px" 
                  src={require(`./img/${i.img2}`)}></img>
                  </div>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em",borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "15em", marginBottom : "3em", textAlign : "left", marginLeft : "1em"}}>
                      내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                </div>

              ))}
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="four">
            {conceptDesign.filter((i, index) => (i.id == 4)).map((i,index) => (
                <div style={{width : "100vw", height : "100%", margin : "1em"}}>
                  <div style={{fontSize : "60px", fontWeight : "bold", textAlign : "left", }}>
                  {i.des1} <span style={{fontSize : "25px"}}> 빈티지 & 레트로 </span>
                  </div>  
                  <div style={{textAlign : "left", fontSize : "28px", 
                  marginBottom  : "3em",  marginTop : "1em"}}>
                  <div> - {i.des2}</div>
                  <div> - {i.des3}</div>
                  <div> - {i.des4}</div>
                  </div>

                  <div style={{textAlign : "left"}}>
                  <img style={{marginRight : "1em",}} width="550px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <img style={{marginRight : "1em", marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img2}`)}></img>
                  <img style={{marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  </div>
                </div>
              ))}

              {intro_color.filter((i) => (i.id == 4)).map((i, index) => (
                <div style={{backgroundColor : "#615F4C", color : "white", borderRadius : "5px", marginLeft : "0.7em",
                alignItems :"center",  padding : "2em", marginRight : "6.5em"}}>
                    <p style={{display : "inline-block", textAlign : "center", backgroundColor : "white", color  :"#615F4C", 
                    fontSize : "25px", border : "2px solid white", borderRadius : "5px", padding : "3px 10px", 
                    marginRight : "2em",  fontWeight : "bold"}}> 색상 | {i.color} </p> 
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"#615F4C", fontSize : "25px", 
                    border : "2px solid white", borderRadius : "5px", padding : "3px 10px", 
                    marginRight : "2em", fontWeight : "bold"}}> 소재 | {i.texture}</p>
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"#615F4C", fontSize : "25px",
                     border : "2px solid white", borderRadius : "5px", padding : "3px 10px",  fontWeight : "bold"}}> 특징 | {i.cha}</p>
                </div>
              ))}

              <div style={{marginTop : "1em", alignItems : "center", padding : "10px", marginBottom : "2em",
                marginRight : "6em", backgroundColor : "#eee", borderRadius : "10px"}}>
            {conceptDesign.filter((i, index) => (i.id == 4)).map((i,index) => (
                <div style={{marginTop: "2em", marginLeft : "2em"}}>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em", borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "14em", marginBottom : "3em",  marginLeft : "1em",
                  textAlign : "left", width : "800px", textAlign : "left"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                  <div style={{display : "flex"}}>
                  <p style={{fontSize : "25px", marginTop : "16em", width : "800px", textAlign : "right", marginRight : "1em"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  <img style={{marginRight : "1em", marginBottom : "3em",borderRadius : "10px"}} width="800px" height="500px" 
                  src={require(`./img/${i.img2}`)}></img>
                  </div>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em",borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "15em", marginBottom : "3em", textAlign : "left", marginLeft : "1em"}}>
                      내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                </div>

              ))}
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="five">
            {conceptDesign.filter((i, index) => (i.id == 5)).map((i,index) => (
                <div style={{width : "100vw", height : "100%", margin : "1em"}}>
                  <div style={{fontSize : "60px", fontWeight : "bold", textAlign : "left", }}>
                  {i.des1} <span style={{fontSize : "25px"}}> 미니멀 & 심플 </span>
                  </div>  
                  <div style={{textAlign : "left", fontSize : "28px", 
                  marginBottom  : "3em",  marginTop : "1em"}}>
                  <div> - {i.des2}</div>
                  <div> - {i.des3}</div>
                  <div> - {i.des4}</div>
                  </div>

                  <div style={{textAlign : "left"}}>
                  <img style={{marginRight : "1em",}} width="550px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <img style={{marginRight : "1em", marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img2}`)}></img>
                  <img style={{marginLeft : "1em"}} width="550px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  </div>
                </div>
              ))}

              {intro_color.filter((i) => (i.id == 5)).map((i, index) => (
                <div style={{backgroundColor : "gray", color : "white", borderRadius : "5px", marginLeft : "0.7em",
                alignItems :"center",  padding : "2em", marginRight : "6.5em"}}>
                    <p style={{display : "inline-block", textAlign : "center", backgroundColor : "white", color  :"gray", 
                    fontSize : "25px", border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em",  fontWeight : "bold"}}> 색상 | {i.color} </p> 
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"gray", fontSize : "25px", 
                    border : "2px solid white", borderRadius : "5px", padding : "3px 10px", marginRight : "2em", fontWeight : "bold"}}> 소재 | {i.texture}</p>
                    <p style={{display : "inline-block", textAlign : "center", 
                    backgroundColor : "white", color  :"gray", fontSize : "25px",
                     border : "2px solid white", borderRadius : "5px", padding : "3px 10px",  fontWeight : "bold"}}> 특징 | {i.cha}</p>
                </div>
              ))}

              <div style={{marginTop : "1em", alignItems : "center", padding : "10px", marginBottom : "2em",
                marginRight : "6em", backgroundColor : "#eee", borderRadius : "10px"}}>
            {conceptDesign.filter((i, index) => (i.id == 5)).map((i,index) => (
                <div style={{marginTop: "2em", marginLeft : "2em"}}>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em", borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img1}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "14em", marginBottom : "3em",  marginLeft : "1em",
                  textAlign : "left", width : "800px", textAlign : "left"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                  <div style={{display : "flex"}}>
                  <p style={{fontSize : "25px", marginTop : "16em", width : "800px", textAlign : "right", marginRight : "1em"}}>
                        내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  <img style={{marginRight : "1em", marginBottom : "3em",borderRadius : "10px"}} width="800px" height="500px" 
                  src={require(`./img/${i.img2}`)}></img>
                  </div>
                  <div style={{display : "flex"}}>
                  <img style={{marginRight : "1em",borderRadius : "10px"}} width="800px" height="500px" src={require(`./img/${i.img3}`)}></img>
                  <p style={{fontSize : "25px", marginTop : "15em", marginBottom : "3em", textAlign : "left", marginLeft : "1em"}}>
                      내추럴 컨셉은 가공을 최소화한 자연적인 질감이 포인트예요. 
                  <br/>화이트+우드 조합은 실패하지 않는 가장 확실한 인테리어 공식이죠.</p>
                  </div>
                </div>

              ))}
</div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    <Footer/>
        </>
    );
}
 
export default Service;