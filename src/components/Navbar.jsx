import { Link } from "react-router-dom";
import Logo from  "../assets/flatLogo.png";
import Search from "./Search";

function Navbar({darkTheme, setDarkTheme}) {
  return (
    <div className="p-4 flex flex-wrap sm:justify-between justify-center items-center border-b-2 dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">  
        <Link to="/">
          <img className="w-24 rounded-full bg-red-400/75 dark:bg-gray-500 dark:border-white dark:border-2" src={Logo} alt="QueryKoala" />
        </Link>
        <Search />
        <button 
          type="button" 
          onClick={() => setDarkTheme(!darkTheme)} 
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light ☀️" : "Dark 🌙" }
        </button>
      </div>
    </div>
  )
}

export default Navbar;





