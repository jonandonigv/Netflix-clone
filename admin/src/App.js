import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.scss';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
