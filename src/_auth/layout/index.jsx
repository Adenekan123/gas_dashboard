import { Outlet } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faBell,

  
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Components/Sidebar";

const AuthLayout = () => {

  // const isAuth = false;
  // const navigate = useNavigate();

  // useEffect(()=>{
  //    if(!isAuth) navigate("/")
  // },[isAuth,navigate]);


  const [profileOpen,setProfileOpen] = useState(false);
  const toggleProfile=()=>setProfileOpen(!profileOpen)

  const [notificationOpen,setNotificationOpen]= useState(false);
  const toggleNotification = ()=> setNotificationOpen(!notificationOpen);

  // Hamburgger
  
    // const [isOpen,setIsOpen]=useState(true);
    // const toggleHambuger=()=> setIsOpen(!isOpen)
  

  return (

    

      <div className="grid grid-cols-12 grid-rows-auto h-screen">
        {/* {isOpen && } */}

        {/* Sidebar */}
        
<Sidebar/>
    
        
        {/* Main Content */}
        <div className="col-span-10 bg-gray-100">

          {/* Navbar */}
          <div className="bg-gray-800 text-gray-500 text-lg font-serif" >
            <div className="flex p-3 justify-end">

              {/* Handburgger */}
              <div className=" absolute left-72 ">
                <FontAwesomeIcon icon={faBars} className="fa-1x p-3 bg-gray-950 rounded-full text-red-500 cursor-pointer"/>
              </div>

            



              {/* Notification */}
            <div>
              <ul className="mr-6">
                <li className="cursor-pointer" onClick={toggleNotification}>
                <a href="#" className="flex hover:text-red-500">
                  <FontAwesomeIcon icon={faBell} className="mr-2 p-2 bg-gray-950 rounded-full"/>
                 Notification
                  <FontAwesomeIcon
                    icon={notificationOpen ? faAngleUp : faAngleDown}
                    className={`ml-2 mt-2 transition-transform ${
                    notificationOpen ? 'transform rotate-360' : ''
                    }`}/>
                </a>
                </li>
              </ul>
              </div>

                    {/* Profile */}
            <div>
              <ul>
                <li className="cursor-pointer" onClick={toggleProfile}>
                <a href="#" className="flex hover:text-red-500">
                <div className="bg-white h-10 w-10 rounded-full mr-2 text-lg"></div>
                 My Profile
                  <FontAwesomeIcon
                    icon={profileOpen ? faAngleUp : faAngleDown}
                    className={`ml-2 mt-2  transition-transform ${
                    profileOpen ? 'transform rotate-360' : ''
                    }`}/>
                </a>
                </li>
              </ul>
              </div>
              
            </div>

          </div>

          {notificationOpen && (
              <ul className="absolute right-20 w-48 mr-28 bg-gray-800  shadow-lg text-white text-ms font-serif cursor-pointer ">
                <li className="hover:bg-gray-950 hover:text-red-500 pl-4 mb-2 text-left border-b-2 border-gray-500  ">
                  <a href="#">
                    <h2>Profile Updated</h2>
                    <p className="text-gray-400 text-base mb-2 font-mono">15m agao</p>
                  </a>
                </li>
                <li className="hover:bg-gray-950 hover:text-red-500 pl-4 mb-2 text-left border-b-2 border-gray-500">
                  <a href="#">
                    <h2>20KG Sold</h2>
                    <p className="text-gray-400 mb-2 font-mono">10 Minutes agao</p>
                  </a>
                </li>
                <li className="hover:bg-gray-950 hover:text-red-500 pl-4 mb-2 text-left">
                  <a href="#">
                    <h2>100GK Added</h2>
                    <p className="text-gray-400 mb-2 font-mono">12 Minutes agao</p>
                  </a>
                </li>
              </ul>
            )}
          
            {profileOpen && (
              <ul className="absolute right-0 w-40 mr-3 bg-gray-800  shadow-lg py-2 text-gray-500 text-lg font-serif cursor-pointer ">
                <li className="hover:bg-gray-950 hover:text-red-500 pl-4 text-left rounded-e-full ">
                  <a href="#">My Profile</a>
                </li>
                <li className="hover:bg-gray-950 hover:text-red-500 pl-4 text-left rounded-e-full">
                  <a href="#">Settings</a>
                </li>
                <li className="hover:bg-gray-950 hover:text-red-500 pl-4 text-left rounded-e-full">
                  <a href="#">Log Out</a>
                </li>
              </ul>
            )}



          {/* Main Content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Main Content</h2>

            {/* content */}
          </div>
        </div>
      </div>
  
  );
};

export default AuthLayout;
