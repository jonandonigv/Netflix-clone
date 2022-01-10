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
import { useEffect, useMemo, useState } from "react";
import axios from 'axios'
import { Login } from "./pages/login/Login";

function App() {

  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes >
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/users' element={<UserList/>}/>
          <Route exact path='/user/:userId' element={<User />}/>
          <Route exact path='/newUser' element={<NewUser />}/>
          <Route exact path='/movies' element={<MovieList />}/>
          <Route exact path='/movie/:movieId' element={<Movie />}/>
          <Route exact path='/newMovie' element={<NewMovie />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
