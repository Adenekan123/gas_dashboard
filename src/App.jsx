import { Route, Routes } from 'react-router-dom';
import RootLayout from './_root/layout';
import SigninForm from './_root/pages/signinForm';
import SignupForm from './_root/pages/signupForm';
import AuthLayout from './_auth/layout';
import Dashboard from './_auth/pages/dashboard';
import sideBar from './_root/Components/Sidebar/sideBar';
import navBar from './_root/Components/Navbar/navBar';
import main from './_root/Components/MainSection/main';


function App() {


  return (
   <Routes>
       <Route element={<RootLayout/>}>
            <Route index element={<SigninForm/>} />
            <Route path='/signup' element={<SignupForm/>} />
            {/* <Route path='/sidebar' element={<Sidebar/>} /> */}
       </Route>
       <Route element={<AuthLayout/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
       </Route>
       <Route element={<sideBar/>}>
        <Route path='sideBar' element={<sideBar/>}/>

       </Route>
       
   </Routes>

  )
 }

export default App
