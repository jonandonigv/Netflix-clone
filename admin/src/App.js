import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.scss';
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import UserList from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { MovieList} from "./pages/movieList/MovieList";

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes >
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/users' element={<UserList/>}/>
          <Route exact path='/user/:userId' element={<User />}/>
          <Route exact path='/newUser' element={<NewUser />}/>
          <Route exact path='/movies' element={<MovieList />}/>
          <Route exact path='/movie/:movieId' element={<User />}/>
          <Route exact path='/newMovie' element={<NewUser />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
