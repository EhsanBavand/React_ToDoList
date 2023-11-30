import FirstComponent from "./components/FirstComponent";
import Navbar from "./components/Navbar";
import { useState } from "react";

let txt = "Ehsan Bavand";

let array = ["User1", "User2"];
let gender = "A";

const clickBtn = () => {
  console.log("Clicked");
};

const App = () => {
  const [x, setx] = useState(0);

  return (
    <div>
      {/* return The Component */}
      <Navbar />
      {/* return txt */}
      {txt}
      {/* return Array */}
      {array.map((item) => {
        <h4>{item}</h4>;
      })}
      {/* return condition */}
      {gender === "A" ? <h3>Girl</h3> : <h3>Boy</h3>}
      {/* Button in React */}
      {/*  if We use the x here I shows just 0*/}
      {x}
      {/* to fix it we should go toadd the code up */}
      <button
        onClick={() => { clickBtn();setx(x + 1);}}>Click Me</button>

         {
          /* how we can passed the value of a component to another component 
          we want to pass value of X to the first Component
         */}
        <FirstComponent/>
    </div>
  );
};

export default App;
