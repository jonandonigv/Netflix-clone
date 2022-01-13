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
import { Movie } from "./pages/movie/Movie";
import { NewMovie } from "./pages/newMovie/NewMovie";
import { useEffect, useMemo, useState, useContext } from "react";
import axios from 'axios'
import { Login } from "./pages/login/Login";
import {AuthContext} from './context/authContext/AuthContext'

function App() {
  const {user} = useContext(AuthContext);

  return (
    <Router className="App">
      <Routes>
        <Route exact path='/login' element={user ? <Home/> : <Login/>}/>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path='/users' element={<UserList/>}/>
              <Route exact path='/user/:userId' element={<User />}/>
              <Route exact path='/newUser' element={<NewUser />}/>
              <Route exact path='/movies' element={<MovieList />}/>
              <Route exact path='/movie/:movieId' element={<Movie />}/>
              <Route exact path='/newMovie' element={<NewMovie />}/>
              {/* TODO: List routes */}
            </div>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
