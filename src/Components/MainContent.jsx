import RoutingNav from "../Components/RoutingNav.jsx"
import IframeContainer from "../Components/IframeContainer.jsx"
import OnePageTemplate from "../Components/OnePageTemplate.jsx"

export default function MainContent({background}) {
  const name = "maincontent"

  return(

    <div id={name} style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',  
                    }}
      > 
      
      <IframeContainer 
        src="https://blog.magwebdesigns.net/"
        height = "1200px"
      />


    </div>
    
  )
  
} 


