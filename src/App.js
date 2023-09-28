import './App.css';
import {Routes, Route} from 'react-router-dom'
import Settings from './screens/ProtectedRoutes/Settings/Settings.jsx';
import Landing from './screens/UnprotectedRoutes/Landing/Landing.jsx';
import Homepage from './screens/ProtectedRoutes/HomePage/Homepage.jsx';
import SignUp from './screens/UnprotectedRoutes/SignUp/SignUp.jsx';
import SignIn from './screens/UnprotectedRoutes/SignIn/SignIn.jsx';
import Nav from './components/Nav/Nav.jsx';
import Layout from './components/Layout/Layout.jsx';
import RequireAuth from './components/RequireAuth/RequireAuth.jsx';



function App() {
  


  return(
    <Routes>
      {/*Pubic Routes*/}
      <Route path = "/" element={<Layout />}>
       <Route path= 'welcome' element={<Landing/>}/>
       <Route path= 'signin' element={<SignIn/>}/>
       <Route path= 'signup' element={<SignUp/>}/>
  {/* <Nav/>  */}
      {/* Private Routes */}
        <Route element={<RequireAuth/>}>        
          <Route path= 'homepage' element={<Homepage/>}/>
          <Route path= 'settings' element={<Settings/>}/>
        </Route>
      </Route>
    </Routes>
  
)
}

export default App;