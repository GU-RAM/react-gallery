// import logo from './logo.svg';
import './App.css';
import GalleryData from './components/GalleryData';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className='App'>
      <Gallery images={GalleryData} />
    </div>
  );
}

export default App;
