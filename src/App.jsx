import { Route, Routes } from 'react-router-dom';
import RootLayout from './_root/layout';
import SigninForm from './_root/pages/signinForm';
import SignupForm from './_root/pages/signupForm';
import AuthLayout from './_auth/layout';
import Dashboard from './_auth/pages/dashboard';

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
    
   </Routes>

  )
 }

export default App
