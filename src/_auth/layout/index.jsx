import { Outlet } from "react-router-dom";


import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/MainSection";

const AuthLayout = () => {

  // const isAuth = false;
  // const navigate = useNavigate();

  // useEffect(()=>{
  //    if(!isAuth) navigate("/")
  // },[isAuth,navigate]);


  

  // Hamburgger
  
    // const [isOpen,setIsOpen]=useState(true);
  // const toggleHambuger=()=> setIsOpen(!isOpen)
  <Outlet />
  

  return (
      <div className="grid grid-cols-12 grid-rows-auto h-screen">
        {/* {isOpen && } */}

      {/* Sidebar */}
      <Sidebar/>
    
        {/* Main Content */}
      <div className="col-span-10 bg-gray-100">
        {/* Sidebar */}
      <Navbar />
        
      {/* Main Content */}
         <Main />
        </div>
      </div>
  
  );
};

export default AuthLayout;
