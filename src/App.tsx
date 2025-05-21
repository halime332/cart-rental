import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./pages/components/header";


const App:FC= () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-secondary-orange text-white">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
