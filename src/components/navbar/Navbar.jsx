import "./Navbar.scss";
import logo from "../../img/logo.png"


const Navbar = () => {
  return (
    <div className="container">
    <div className="navbar-left">
    <img src={logo} alt="" /></div>
    <div className="navbar-right">
     <ul>
     <a href="#"><li>HOROSCOPE</li></a>
          <a href="#"><li>DAILY</li></a>
          <a href="#"><li>TAROT</li></a>
          <a href="#"><li>ARTICLE</li></a>
          <a href="#"><li>CONTACT</li></a>
     </ul>
    </div>






    </div>
  )
}

export default Navbar