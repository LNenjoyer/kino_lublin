import './Header.css';
function Header () 
{
    return (
        <header className="navBar">
            <div className="logo">
                <img src="https://www.cinema-city.pl/mrest/logos/v1/10103/logo.svg" alt="logo" height="30%" width="30%"/>
            </div>
            <div className="nav" id="lokalizacja">
                <a href="#">
                    <img src="https://www.cinema-city.pl/xmedia/img/10103/locationpicker-map-marker.svg" height="6%" width="6%"/>Wybierz swoje kino</a>
            </div>
            <div className="nav" id="logowanie">
                <a href="#"><img src="https://www.cinema-city.pl/xmedia/img/10103/user-icon.svg" height="9%" width="9%"/>Logowanie</a>
            </div>
            <div className="nav" id="rejestracja">
                <a href="#">Rejestracja</a>
            </div>
            <div className="nav" id="wyszukiwanie">
                <input type="text" placeholder="Szukaj..."></input>
            </div>
        </header >
    );
}

export default Header;
