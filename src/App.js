import cover_img from './Cover.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
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
