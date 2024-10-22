import './CinemaLocation.css';

function CinemaLocation() {
  return (
      <div className="location">
          <div className="location_header">
              <div className="location_header_left">
                  <a href="#" >Start</a> <span className="location_grot">></span> <a href="#">Repertuar</a> <span className="location_grot">></span> <span>Lublin - Plaza</span>

                  <br/><br/>

                  <span className="location_name">LUBLIN - PLAZA</span>
                  <img src="https://www.cinema-city.pl/xmedia/img/icon_info.svg" alt="info"/>

                  <div className="location_select">
                      <button>WYBIERZ INNE KINO</button>
                  </div>
              </div>
          </div>

      </div>
  );
}

export default CinemaLocation;