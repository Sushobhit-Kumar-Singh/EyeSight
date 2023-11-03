import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./Navigation.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ClickIt } from "../ClickIt";

function Navigation() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const speech = () => {
    setIsListening(!isListening);
    if (isListening) {
      resetTranscript();
      SpeechRecognition.startListening();
    } else {
      SpeechRecognition.stopListening();
      console.log(transcript);
      console.log(document.getElementById(transcript));
      if (document.getElementById(transcript) != null) {
        let speech = new SpeechSynthesisUtterance();
        speech.text = "Going to " + transcript + " page";
        window.speechSynthesis.speak(speech);
        ClickIt(transcript);
      } else {
        let speech = new SpeechSynthesisUtterance();
        speech.text = "No such page found";
        window.speechSynthesis.speak(speech);
      }

      resetTranscript();
    }
  };
  return (
    
    <header className="nav">
      <img
        onClick={speech}
        className="logo"
        alt="logo"
        src="https://i.ibb.co/tZthqNw/logo2-1.png"
      />
         
      <nav>
        <ul>
          <li id="Home">
            <Link to="/">Home</Link>
          </li>
          <li id="vision">
            <Link to="/Vision">Vision</Link>
          </li>
          <li id="read">
            <Link to="/Read-Text">Read Text</Link>
          </li>
          <li id="about">
            <Link to="/About-us">About Us</Link>
          </li>
         
        </ul>
        
        <Link id="object" to="/Vision/Object-recognition"></Link>
        <Link id="home" to="/"></Link>
        <a id="face" href="http://localhost:3001/"></a>
        
      </nav>
      
    </header>
       
    
    
    
  );
}

export default Navigation;
