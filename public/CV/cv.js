
//AvatarName về tên và avatar
  function  AvatarName(props){
    return(
        <div className="fullAvatar" >
            <img className="imgAvatar" src={props.avatar}></img>
            <h1 className="fullName">{props.name}</h1>
            <h2 className="Job">{props.job}</h2>
        </div>
        );
    }
    //-----------------------------
    //UserInfo về thông tin chung
    function UserInfo(props){
        return(
            <div className="p_full">
                  
                <div className="p_content">  
                    <h1 className="skillh1">Thông tin cơ bản</h1>      
                    <div><img className="icon" alt="logo" src="../image/calendar.png"></img><p className="infoText">{props.birthday}</p></div>
                    <div><img className="icon" alt="logo" src="../image/avatar.png"></img><p className="infoText">{props.sex}</p></div>
                    <div><img className="icon" alt="logo" src="../image/phone.png"></img><p className="infoText">{props.phone}</p></div>
                    <div><img className="icon" alt="logo" src="../image/email.png"></img><p className="infoText">{props.email}</p></div>
                    <div><img className="icon" alt="logo" src="../image/address.png"></img><p className="infoText">{props.address}</p></div>     
                </div>
                
            </div>
        );
    }
    //SkillBar về kỹ năng html,css...
    function SkillBar(props){
        return(
            
            <div className="p_full">
                
                <div className="p_content">
                <h1 className="skillh1">Kỹ năng</h1>
                <p>{props.skill1}</p>
                <div className="containerSkill">
                    <div className="skills s1">90%</div>
                 </div>
                <p>{props.skill2}</p>
                <div className="containerSkill">
                    <div className="skills s2">80%</div>
                </div>
                <p>{props.skill3}</p>
                <div className="containerSkill">
                    <div className="skills s3">65%</div>
                </div>
                <p>{props.skill4}</p>
                <div className="containerSkill">
                    <div className="skills s4">70%</div>
                </div>
                </div>
            </div>
        );
    }
    //kinh nghiệm
      class Experience extends React.Component{
        constructor(props){
            super(props);

    
        }
       
        render(){
            return(
            <div className="p_full">
                  
                <div className="p_content">  
                    <h1 className="skillh1">Kinh nghiệm làm việc</h1>  
                        <div></div>
                        <h3><button className="addLBM">+</button>  Công ty LBM</h3>
                        <div className="expLBM">                       
                            <p> Vị trí: Thực tập 3 tháng với wordpress</p>
                            <h3>Mô tả</h3>
                            <p> Custom trang web E-commerce bằng wordpress</p>
                            <p> Tìm hiểu về SugarCRM</p>
                        </div>            
                        <h3><button className="addVBE">+</button>  Vietnam Broadcast and Entertainment (VBE)</h3>
                        <div  className="expVBE"> 
                            <p> Vị trí: Tìm hiểu và quản lý hệ thống livestreaming</p>
                            <h3>Mô tả</h3>
                            <p> Tạo một server livestream bằng nginx</p>
                            <p> Custom một session livestream bằng vMix hoặc OBS</p>
                        </div>        
                </div>
                
            </div>
        );
        }
    }
    function  Project(){
            return(
                <div className="p_full">       
                    <div className="p_content">  
                        <h1 className="skillh1"> Đồ án tham gia</h1>  
                        <h3><button className="addPro1">+</button>  Website E-commerce</h3>
                        <div className="expPro1">  
                            
                            <p> Code website bán hàng bằng framework ReactJS</p>
                            <p> Duration: 8/2021 - 11/2021</p>
                            <h3>Mô tả</h3>
                            <p> Công việc: Frontend UI/UX</p>
                            <p> Ngôn ngữ: HTML,CSS,ReactJS</p>
                            <p> Link GIT:</p>
                            
                        </div>
                        <h3><button className="addPro2">+</button>  CV ReactJS</h3>
                        <div  className="expPro2">  
                         
                            <p> Làm CV bằng ReactJS</p>
                            <p> Duration: 8/2021 - 11/2021</p>
                            <h3>Mô tả</h3>
                            <p> Code onepage CV</p>
                            <p> Ngôn ngữ: HTML,CSS,ReactJS</p>
                            <p> link GIT:</p>
                            
                        </div>        
                    </div>
                    
                </div>
            );
            }
   function Favorite(){
       return(
           <div>
               <div className="favMain">  
                    <h2 className="skillh1">Tổng quát</h2>      
                    <p className="fav">Kinh nghiệm 6 tháng làm việc với PHP</p>
                    <p className="fav">Kinh nghiệm 1 năm làm việc với HTML,CSS,JavaSrcipt</p>
                </div>
           </div>
       );
   }
   class Main extends React.Component{
       constructor(props){
           super(props);
           this.scrollInfo=React.createRef();
           this.scrollSkill=React.createRef();
           this.scrollExp=React.createRef();
           this.scrollProject=React.createRef();
       }
       scrollinfo(ref){
           
        ref.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
       }
       scrollskill(ref){
        ref.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
       }
       scrollexp(ref){
        ref.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
       } scrollproject(ref){
        ref.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
       }
       render(){
        return(
            <div className="main">
                 
                <div className="LeftCol">
                    <AvatarName name="Phạm Hồng Phúc" job="Web Developer" avatar="../image/avatar.jpg"/> 
                    <hr/>
                    <Favorite/>         
                 </div>
              
                <div className="RightCol">   
                <div className="buttonMain">
                         
                         <button onClick={() => {this.scrollinfo(this.scrollInfo)}} className="button"><span className="tool tool1">Thông tin cá nhân</span></button>
                         <button onClick={() => {this.scrollinfo(this.scrollSkill)}}className="button"><span className="tool tool2">Kỹ năng</span></button> 
                         <button onClick={() => {this.scrollinfo(this.scrollExp)}}className="button"><span className="tool tool3">Kinh nghiệm</span></button> 
                         <button onClick={() => {this.scrollinfo(this.scrollProject)}} className="button"><span className="tool tool4">Đồ án</span></button>
                         
                      
                 </div>  
                    <div ref={this.scrollInfo}>
                        <UserInfo birthday="02-05-1999" sex="Nam" phone="09 388 50721" email="phamhongphuc02051999@gmail.com" address="169 Trần Văn Đang, P11 , Q3"  name="Phạm Hồng Phúc" job="Web Developer" avatar="../image/avatar.jpg"/>
                    </div>
                     <div ref={this.scrollSkill}>
                        <SkillBar skill1="html" skill2="css" skill3="ReactJS" skill4="php"></SkillBar>
                    </div> 
                    <div ref={this.scrollExp}>
                        <Experience></Experience>
                    </div>   
                   
                    <div ref={this.scrollProject}>
                        <Project></Project>
                    </div>  
                 
                </div>
                <div className="clear"></div>
             
            </div>
          
            );
       }
   }
   
    ReactDOM.render(
    
          <Main/>  

     , document.getElementById("About") ); 
     
     //nhúng html vào thẻ nào
  
     $(document).ready(function(){
        $(".addLBM").click(function(){
          $(".expLBM").slideToggle();
        });
        $(".addVBE").click(function(){
            $(".expVBE").slideToggle();
          });
          $(".addPro1").click(function(){
            $(".expPro1").slideToggle();
          });
          $(".addPro2").click(function(){
            $(".expPro2").slideToggle();
          });
      });
  
     