import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import React, { useState } from "react";

function App() {
  const [authType, setAuthType] = useState("signin");
  return (
    <div className="App">
      {authType === "signin" && <SignIn setAuthType={setAuthType} />}
      {authType === "signup" && <SignUp setAuthType={setAuthType} />}
    </div>
  );
}

export default App;
