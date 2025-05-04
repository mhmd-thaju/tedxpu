import cover_img from './Cover.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Cover' style={{
        backgroundImage:`url(${cover_img})`,
        backgroundSize : 'cover',
        height : '100vh'
      }}>

      </div>
    </div>
  );
}

export default App;
