import Banner from "../Components/Banner.jsx"
import TagCloud from "../Components/TagCloud.jsx"

export default function RightNav({background1,nav_1_name,nav_1_link,background2,nav_2_name,nav_2_link,background3,nav_3_name,nav_3_link,background4,nav_4_name,nav_4_link}) {
  const name = "rightnav"


  
  return(

    <div id={name}> 
      <div id="topnavbutton" > 
        <div style={{
                      backgroundImage: `url(${background2})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width:"100%",
                      minHeight:"200px",
      }}> 

            <div style={{backgroundColor:"rgba(128, 128, 128, 0.3)",borderRadius:"15px",padding:"5px",margin:"5px",textAlign:"justify"}} >
              <a href={nav_2_link} > <h3>{nav_2_name}</h3>  </a>              
              <p>

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

            <div style={{backgroundColor:"rgba(128, 128, 128, 0.3)",borderRadius:"15px",padding:"5px",margin:"5px",textAlign:"justify"}} >
              <a href={nav_3_link} > <h3>{nav_3_name}</h3>  </a>              
              <p>

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

            <div style={{backgroundColor:"rgba(128, 128, 128, 0.3)",borderRadius:"15px",padding:"5px",margin:"5px",textAlign:"justify"}} >
              <a href={nav_4_link} > <h3>{nav_4_name}</h3>  </a>              
              <p>

              </p>  
            </div>        
        </div>

      </div>


      <TagCloud 
        names = {["low cost wordpress site michigan,","cheap wordpress michigan","low cost Wordpress Flint",",low cost wordpress detroit,","low cost wordpress lansing"," low cost wordpress grand rapids, Affordable Web Design Michigan"," React Development Michigan"," React Development Ann Arbor"," cheap website Michigan"," Michigan SEO"]}
        links = {["https://www.magwebdesigns.net","https://magwebdesigns.netlify.app/","https://www.magwebdesigns.net/site/","https://www.youtube.com/@magwebdesignsinc5098","https://blog.magwebdesigns.net/build-smarter-spend-less-web-design-development-services-in-lansing-mi/","https://blog.magwebdesigns.net/grow-your-business-with-affordable-seo-optimized-wordpress-solutions-in-michigan/","https://blog.magwebdesigns.net/grow-your-business-with-affordable-seo-optimized-wordpress-solutions-in-michigan/","https://magwebdesigns.netlify.app/","https://magwebdesigns.net/intro/react-vs-wordpress-which-one-wins-for-seo-in-michigan-web-development/","https://magwebdesigns.net/intro/empowering-local-business-growth-through-web-design-in-flint-michigan/"]}


      />
        
  
          <TagCloud 
            names = {["low,cost,wordpress,site, michigan,","cheap,wordpress michigan,","Wordpress,Flint",",wordpress, detroit,","wordpress,lansing",",wordpress, grandrapids,"]}
            links = {["https://www.magwebdesigns.net","https://magwebdesigns.netlify.app/","https://www.magwebdesigns.net/site/","https://www.youtube.com/@magwebdesignsinc5098"]}
  
  
          />

      
    </div>
    
  )
  
}