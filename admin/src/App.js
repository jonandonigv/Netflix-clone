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

function App() {
  return (
    <Router className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes >
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/users' element={<UserList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
