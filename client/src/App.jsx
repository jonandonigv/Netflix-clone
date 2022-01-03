import './app.scss'
import Home from "./pages/home/Home";
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register/>}/>
        <Route exact path='/register' element={!user ? <Register /> : <Home />}/>
        <Route exact path='/login' element={!user ? <Login /> : <Home />}/>
        {user && (
          <>
            <Route path='/movies' element={<Home type='movies'/>}/>
            <Route path='/series' element={<Home type='series'/>}/>
            <Route path='/watch' element={<Watch />}/>
          </>
        )}
        
      </Routes>
    </Router>
  );
}

export default App;
