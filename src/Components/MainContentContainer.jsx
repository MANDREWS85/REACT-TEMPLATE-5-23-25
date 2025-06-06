import LeftNav from "../Components/LeftNav.jsx"
import RightNav from "../Components/RightNav.jsx"
import MainContent from "../Components/MainContent.jsx"


export default function MainContentContainer({background}) {
  const name = "maincontentcontainer"

  return(

    <div id={name}>  
      <LeftNav
        backround1 = ""
        nav_1_name = "Contact US"
        nav_1_link = "https://www.ebay.com/itm/226337530173"
        backround2 = ""
        nav_2_name = "Blog"
        nav_2_link = "https://blog.magwebdesigns.net/"
        backround3 = ""
        nav_3_name = "Portfolio"
        nav_3_link = "#"
        backround4 = ""
        nav_4_name = "Sales"
        nav_4_link = "#"
      />
        
      
      
      <MainContent 
        background = {background}
        
      />
      
      <RightNav
        nav_1_name = "WORDPRESS SALE"
        nav_1_link = "#"
        background1 = "https://magwebdesigns.netlify.app/static/media/WordPress-Logo-3.30010e01dc3e26f61717.png"
        nav_2_name = "Buy Custom React Apps"
        nav_2_link = "https://www.ebay.com/itm/226337530173"
        background2 = "https://magwebdesigns.netlify.app/static/media/React2.8a6fc0a24a800d1e0f4a.png"
        nav_3_name = "WORDPRESS SALE"
        nav_3_link = "https://www.ebay.com/itm/226337530173"
        background3 = "https://magwebdesigns.netlify.app/static/media/Wordpress2.f1c9b08e0028ba5ed7be.png"
        nav_4_name = "Web Site Sale"
        nav_4_link = "https://www.ebay.com/itm/226337530173"
        background4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
        />
        
    
    
    
     
    </div>
    
  )
  
}