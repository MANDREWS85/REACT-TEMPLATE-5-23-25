export default function Banner({title,tagline,background}) {
  const name = "banner"
  

  return(

    <div id={name} style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',  
                    }}
      > 
      
      <div>  <h1> {title} </h1>  </div>
      <div>  <h3> {tagline} </h3>  </div>
    
    
    
    
    
    </div>
    
  )
  
}