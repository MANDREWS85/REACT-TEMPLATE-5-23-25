import Banner from "../Components/Banner.jsx"


export default function RightNav({nav_1_name,nav_1_link,nav_2_name,nav_2_link,nav_3_name,nav_3_link,nav_4_name,nav_4_link}) {
  const name = "rightnav"

  return(

    <div id={name}> 

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = {nav_1_link}}>{nav_1_name}</button>
        

        
      </div>

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = {nav_2_link}}>{nav_2_name}</button>
      </div>

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = {nav_3_link}}>{nav_3_name}</button>
      </div>

      <div id="topnavbutton" >  
        <button onClick={() => window.location.href = {nav_4_link}}>{nav_4_name}</button>
      </div>

    </div>
    
  )
  
}