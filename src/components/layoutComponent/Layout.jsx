import Footer from "components/footerComponent/Footer"
import NavBar from "components/navComponent/NavBar"
// import SocialMediaInfo from "components/navComponent/SocialMediaInfo"


const Layout = ({children}) => {
  return (
    <div>
        {/* <SocialMediaInfo/> */}
        <NavBar/>        
        {children}
        <Footer/>
    </div>
  )
}

export default Layout