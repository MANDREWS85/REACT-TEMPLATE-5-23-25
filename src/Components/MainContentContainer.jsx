import LeftNav from "../Components/LeftNav.jsx"
import RightNav from "../Components/LeftNav.jsx"
import MainContent from "../Components/MainContent.jsx"


export default function MainContentContainer({background}) {
  const name = "maincontentcontainer"

  return(

    <div id={name}>  
      <LeftNav 
        nav_1_name = "LINK 1"
        nav_1_link = "#"
        nav_2_name = "LINK 2"
        nav_2_link = "#"
        nav_3_name = "LINK 3"
        nav_3_link = "#"
        nav_4_name = "LINK 4"
        nav_4_link = "#"
      />
        
      /> 
      
      <MainContent 
        background = {background}
        
      />
      
      <RightNav 
        nav_1_name = "LINK 1"
        nav_1_link = "#"
        nav_2_name = "LINK 2"
        nav_2_link = "#"
        nav_3_name = "LINK 3"
        nav_3_link = "#"
        nav_4_name = "LINK 4"
        nav_4_link = "#"
        />
        
    
    
    
     
    </div>
    
  )
  
}