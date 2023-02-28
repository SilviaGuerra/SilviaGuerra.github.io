import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">hola header</header> */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
