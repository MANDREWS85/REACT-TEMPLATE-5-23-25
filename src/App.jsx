import './App.css'
import Banner from "./Components/Banner.jsx"
import TopNav from "./Components/TopNav.jsx"
import RoutingNav from "./Components/RoutingNav.jsx"
import LeftNav from "./Components/LeftNav.jsx"
import MainContentContainer from "./Components/MainContentContainer.jsx"
import RightNav from "./Components/RightNav.jsx"
import Footer from "./Components/Footer.jsx"



import OnePageTemplate from "./Components/OnePageTemplate.jsx"


const backgroundImage = "https://i0.wp.com/magwebdesigns.net/intro/wp-content/uploads/2025/05/Digital_rain_animation_medium_letters_shine.gif?resize=500%2C400&ssl=1"

export default function App() {
  return (
    <main style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maxWidth: "1200px",
              justifyContent: "center",
              align:"center",
              margin: "0 auto",
      }} >
      
      <Banner 
        title = " MAG WEB DESIGNS"
        tagline = "Web Site / App Development in Michigan"
        background = "https://i0.wp.com/magwebdesigns.net/intro/wp-content/uploads/2025/05/Digital_rain_animation_medium_letters_shine.gif"
        
      />

      
      
      {/* This is a comment inside JSX 
      <TopNav 
        nav_1_name = "LINK 1"
        nav_1_link = "#"
        nav_2_name = "LINK 2"
        nav_2_link = "#"
        nav_3_name = "LINK 3"
        nav_3_link = "#"
        nav_4_name = "LINK 4"
        nav_4_link = "#"
        
        
        
      />
      */}
      
      <MainContentContainer
        background = "https://i0.wp.com/magwebdesigns.net/intro/wp-content/uploads/2025/05/Digital_rain_animation_medium_letters_shine.gif?resize=500%2C400&ssl=1"
        
      />
      
      <Footer />
      
    </main>
  )
}
