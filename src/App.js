import './App.css';
import {Routes, Route} from 'react-router-dom'
import Settings from './screens/ProtectedRoutes/Settings/Settings.jsx';
import Landing from './screens/UnprotectedRoutes/Landing/Landing.jsx';
import Homepage from './screens/ProtectedRoutes/HomePage/Homepage.jsx';
import SignUp from './screens/UnprotectedRoutes/SignUp/SignUp.jsx';
import SignIn from './screens/UnprotectedRoutes/SignIn/SignIn.jsx';
import Nav from './components/Nav/Nav.jsx';



function App() {
  


  return(
  <div className="App">
    <Routes>
      <Route path= '/' element={<Landing/>}/>
      <Route path= '/signin' element={<SignIn/>}/>
      <Route path= '/signup' element={<SignUp/>}/>
    </Routes>
    <Nav/>
    <Routes>
      <Route path= '/homepage' element={<Homepage/>}/>
      <Route path= '/settings' element={<Settings/>}/>
    </Routes>
  </div>
)
}

export default App;
