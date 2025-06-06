export default function LeftNav({nav_1_name,nav_1_link,nav_2_name,nav_2_link,nav_3_name,nav_3_link,nav_4_name,nav_4_link,}) {
  const name = "leftnav"

  return(

    <div id={name}> 

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = "https://www.ebay.com/itm/226337530173"}> {nav_1_name} </button>
        
      </div>

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = "https://blog.magwebdesigns.net/"}>{nav_2_name}</button>
      </div>

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = "https://magwebdesigns.netlify.app/"}>{nav_3_name}</button>
      </div>

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = "https://www.ebay.com/itm/226337530173"}>{nav_4_name}</button>
      </div>

    </div>
    
  )
  
}