import './App.css';

import Slideshow from './slider.jsx';
import CinemaLocation from './CinemaLocation';


function App() {
  return (
    <div className="App">
      {/*Header + wyszukiwanie filmów na danej stronie*/}

        <div className="linki">
            <div className="container">
                <div className="link"><a href="https://www.cinema-city.pl/#/">ORGINAŁ</a></div>
                <div className="link"><a href="repertuar">REPERTUAR</a></div>
                <div className="link"><a href="oferty">OFERTY</a></div>
                <div className="link"><a href="prezenty">PREZENTY</a></div>
                <div className="link"><a href="bar">BAR</a></div>
                <div className="link"><a href="szkoly">SZKOŁY</a></div>
                <div className="link"><a href="blog">BLOG</a></div>
                <div className="link"><a href="unlimited"><b>UNLIMITED</b></a></div>
                <div className="link"><a href="4dx">4DX</a></div>
                <div className="link"><a href="imax"><b>IMAX</b></a></div>
                <div className="link"><a href="screenx">SCREEN<b>X</b></a></div>
                <div className="link"><a href="vip"><b>VIP</b></a></div>
            </div>
        </div>

      <CinemaLocation />


      {/*Slider z premierami*/}

      <Slideshow/>

      {/*Wybór filmów z czasami:*/}

        {/*Slider z premierami*/}

        {/*Wybór filmów z czasami:*/}
    </div>
  );
}

export default App;
