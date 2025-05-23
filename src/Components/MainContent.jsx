

export default function MainContent({background}) {
  const name = "maincontent"

  return(

    <div id={name} style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',  
                    }}
      > 
      
      <h1>  MAIN CONTENT </h1>

    </div>
    
  )
  
} 


