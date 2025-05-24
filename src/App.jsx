import './App.css'
import Banner from "./Components/Banner.jsx"
import TopNav from "./Components/TopNav.jsx"
import RoutingNav from "./Components/RoutingNav.jsx"
import LeftNav from "./Components/LeftNav.jsx"
import MainContentContainer from "./Components/MainContentContainer.jsx"
import RightNav from "./Components/RightNav.jsx"
import Footer from "./Components/Footer.jsx"

const backgroundImage = "https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2021/02/empire_fable_title_animated-1-1024x1024.gif"

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
        title = " SITE TITLE "
        tagline = "SITE TAGLINE"
        background = "https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2021/10/Empire_Fable_Thumb_Continent_Region_Map_Hand_Drawn_small-1.jpeg"
        
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
        background = "https://empirefable.magwebdesigns.net/wp/wp-content/uploads/2021/10/dwarven_alebelcher_hand_drawn-1024x768.jpg"
        
      />
      
      <Footer />
      
    </main>
  )
}
