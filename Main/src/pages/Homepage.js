import "./Homepage.css";
import ButtonBlue from "../components/ButtonBlue";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
     
      <div className="left-div">
        <h2 className="home-h2">Welcome To EyeSight</h2>
        <img
          src="https://i.ibb.co/RbGQcxj/Eye-Sight-leaf-2-1.png"
          alt="logo-leaf"
          className="logo-leaf"
        />
        <h1 className="home-h1">Enhance your vision with us</h1>
        <Link to="/Vision"><div className="home-btn"><ButtonBlue text="Get Started" /></div></Link>
        
      </div>
      <div className="front-rect">Meet your Virtual eyes with EyeSight.</div>
      <img
        className="front-img"
        alt="front-people"
        src="https://i.ibb.co/YWbvC1g/front-img.jpg"
      />
       
    </div>
  );
}

export default Homepage;
