// import logo from './logo.svg';
import './App.css';
import GalleryData from './components/GalleryData';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='App'>
      <Gallery images={GalleryData} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
