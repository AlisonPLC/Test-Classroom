import "./scss/main.scss";
import logo from "./images/OrangeS.png"
import Header from "./components/Header";
import BodyElement from "./components/BodyElement";
import Consult from "./components/Consult";
import { useState } from "react";



function App() {

  const [ConsultON, setConsultON] = useState(true);

  return (
    <div className="App">    
        <Header/>
        {/* Switch between body element and the many tasks when clicked in te button */}
        {ConsultON == true ? <Consult/> : <BodyElement/>}
        
    </div>
  );
}

export default App;
