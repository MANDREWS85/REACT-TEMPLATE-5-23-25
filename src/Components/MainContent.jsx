import RoutingNav from "../Components/RoutingNav.jsx"


export default function MainContent({background}) {
  const name = "maincontent"

  return(

    <div id={name} style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',  
                    }}
      > 
      <RoutingNav />
      <h1>  MAIN CONTENT </h1>

    </div>
    
  )
  
} 


