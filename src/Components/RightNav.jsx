import Banner from "../Components/Banner.jsx"


export default function RightNav({background1,nav_1_name,nav_1_link,background2,nav_2_name,nav_2_link,background3,nav_3_name,nav_3_link,background4,nav_4_name,nav_4_link}) {
  const name = "rightnav"


  
  return(

    <div id={name}> 
      
      <div id="topnavbutton" > 
        <div style={{
                      backgroundImage: `url(${background1})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width:"100%",
                      minHeight:"200px",
      }}> 

            <div style={{backgroundColor:"rgba(128, 128, 128, 0.3)",borderRadius:"15px",padding:"5px",margin:"5px"}} >
              <a href={nav_1_link} > <h3>{nav_1_name}</h3>  </a>              
              <p>
                DESCRIPTION TEXT DESCR IPTION TEXT DESCR IPTION TEXT DESCRIPTION TEXT 
                DESCRIPTION TEXT DESCRI PTION TEXT DESCRI PTION TEXT DESCRIPTION TEXT 
                TEXT DESCRIPTION TEXT DESCRIPTION TEXT DESCRIPTION TEXT 
              </p>  
            </div>        
        </div>

      </div>

      <div id="topnavbutton" > 
        <div style={{
                      backgroundImage: `url(${background2})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width:"100%",
                      minHeight:"200px",
      }}> 

            <div style={{backgroundColor:"rgba(128, 128, 128, 0.3)",borderRadius:"15px",padding:"5px",margin:"5px"}} >
              <a href={nav_2_link} > <h3>{nav_2_name}</h3>  </a>              
              <p>
                DESCRIPTION TEXT DESCR IPTION TEXT DESCR IPTION TEXT DESCRIPTION TEXT 
                DESCRIPTION TEXT DESCRI PTION TEXT DESCRI PTION TEXT DESCRIPTION TEXT 
                TEXT DESCRIPTION TEXT DESCRIPTION TEXT DESCRIPTION TEXT 
              </p>  
            </div>        
        </div>

      </div>

      <div id="topnavbutton" > 
        <div style={{
                      backgroundImage: `url(${background3})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width:"100%",
                      minHeight:"200px",
      }}> 

            <div style={{backgroundColor:"rgba(128, 128, 128, 0.3)",borderRadius:"15px",padding:"5px",margin:"5px"}} >
              <a href={nav_3_link} > <h3>{nav_3_name}</h3>  </a>              
              <p>
                DESCRIPTION TEXT DESCR IPTION TEXT DESCR IPTION TEXT DESCRIPTION TEXT 
                DESCRIPTION TEXT DESCRI PTION TEXT DESCRI PTION TEXT DESCRIPTION TEXT 
                TEXT DESCRIPTION TEXT DESCRIPTION TEXT DESCRIPTION TEXT 
              </p>  
            </div>        
        </div>

      </div>

      <div id="topnavbutton" > 
        <div style={{
                      backgroundImage: `url(${background4})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width:"100%",
                      minHeight:"200px",
      }}> 

            <div style={{backgroundColor:"rgba(128, 128, 128, 0.3)",borderRadius:"15px",padding:"5px",margin:"5px"}} >
              <a href={nav_4_link} > <h3>{nav_4_name}</h3>  </a>              
              <p>
                DESCRIPTION TEXT DESCR IPTION TEXT DESCR IPTION TEXT DESCRIPTION TEXT 
                DESCRIPTION TEXT DESCRI PTION TEXT DESCRI PTION TEXT DESCRIPTION TEXT 
                TEXT DESCRIPTION TEXT DESCRIPTION TEXT DESCRIPTION TEXT 
              </p>  
            </div>        
        </div>

      </div>

    </div>
    
  )
  
}