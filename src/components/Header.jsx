import { useNavigate } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import {auth} from '../utils/firebase'
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();


  const handleSignOut = () =>{
    signOut(auth).then(()=>{
      navigate("/");
    }).catch((error)=>{
      navigate("/error");
    });
  }

  return (
    <div className="bg-transparent hover:bg-black hover:bg-opacity-30 flex justify-between m-0 z-30 relative">
      <div className="logocontainer">
        <img 
         src= {LOGO_URL}
         className="w-44 p-2"
         />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-white font-bold hover:bg-yellow-300 hover:text-black  rounded-lg"><Link to='/home'>Home</Link></li>
          <li className="px-4 text-white font-bold hover:bg-yellow-300 hover:text-black rounded-lg"><Link to="/fleets">Our Fleets</Link></li>
          <li className="px-4 text-white font-bold hover:bg-yellow-300 hover:text-black rounded-lg">About Us</li>
          <li className="px-4 text-white font-bold hover:bg-yellow-300 hover:text-black rounded-lg">Contact Us</li>
          <button 
          onClick={handleSignOut}
          className="px-8 rounded-lg font-bold text-white hover:text-black hover:bg-red-500"
          >Log Out</button>
        </ul>
      </div>
    </div>
  )
}

export default Header