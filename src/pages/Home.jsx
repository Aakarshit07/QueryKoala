import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"
import { useState } from "react";


function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  
  return (
    <div className={darkTheme ? "dark" : ""}>
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Outlet/>
      <Footer />  
    </div>
    </div>
  )
}

export default Home;