import "./Vision.css";

function Vision() {
  return (
      
    <div className="vir-div">
    
      <h1 className="vir-h1">Meet your virtual eyes with EyeSight</h1>
      <a href="/Vision/Object-recognition">
        <button className="but-obj">
          <h4>Object Recognition</h4>
          <img
            className="vir-arw"
            alt="blue-arrow"
            src="https://i.ibb.co/PwsWpJz/blue-arrow-right.png"
          ></img>
        </button>
      </a>
      <div class="vl"></div>
      <a href="http://localhost:3001/">
        <button className="but-face">
          <h4>Face Recognition</h4>
          <img
            className="vir-arw"
            alt="blue-arrow"
            src="https://i.ibb.co/PwsWpJz/blue-arrow-right.png"
          ></img>
        </button>
      </a>
    </div>
  );
}

export default Vision;
