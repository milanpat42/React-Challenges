import "./App.css";
import { babyData } from "./babyNamesData.js";

import DisplayBabyNames from "./Register";
import React, { useEffect, useState } from "react";
import BabyForm from "./BabyForm";

function App() {
  const [babyInfo, setBabyInfo] = useState(babyData);
  useEffect(() => {
    console.log(babyInfo);
  });
  function addBaby(newBorn) {
    console.log(newBorn);
    const updatedBabyArr = [newBorn, ...babyInfo];
    setBabyInfo(updatedBabyArr);
  }
  return (
    <div className="App">
      <div className="main-body">
        <BabyForm updateFunction={addBaby} />
        <DisplayBabyNames babyData={babyInfo} />
      </div>
    </div>
  );
}

export default App;
