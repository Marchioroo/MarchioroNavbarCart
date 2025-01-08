import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        Minha loja com Tailwind
      </div>
    </div>
  );
}

export default App;
