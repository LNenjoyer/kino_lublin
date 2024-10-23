import './App.css';
import DisplayFilms from './DisplayFilms.jsx';
import Slideshow from './slider.jsx';
import CinemaLocation from './CinemaLocation';
import Linki from './linki';
function App() {
  return (
    <div className="App">
      {/*Header + wyszukiwanie filmów na danej stronie*/}

       
      <Linki/>

      <CinemaLocation />

      {/*Slider z premierami*/}
      <Slideshow/>
                  
      {/*Wybór filmów z czasami:*/}
      <DisplayFilms/>
    </div>
      );
      }
      export default App;