import FilmList from "./FilmList.jsx";
import SelectDay from "./SelectDay.jsx";
import ThisDay from "./ThisDay.jsx";
import "./DisplayFilms.css";
const films = [
    {
        title: "Batman: Dark Knight",
        time: "12:00",
        genre: "Akcja",
        playtime: "2h 32min",
        view: "2D",
        photo: "https://originalvintagemovieposters.com/wp-content/uploads/2020/03/Dark-Knight-70822-scaled-692x1024.jpg"
    },
    {
        title: "Batman: Dark Knight",
        time: "12:00",
        genre: "Akcja",
        playtime: "2h 32min",
        view: "2D",
        photo: "https://originalvintagemovieposters.com/wp-content/uploads/2020/03/Dark-Knight-70822-scaled-692x1024.jpg"
    },
    {
        title: "Batman: Dark Knight",
        time: "12:00",
        genre: "Akcja",
        playtime: "2h 32min",
        view: "2D",
        photo: "https://originalvintagemovieposters.com/wp-content/uploads/2020/03/Dark-Knight-70822-scaled-692x1024.jpg"
    },
];
function DisplayFilms(){
    return (
        <div className="Film">
            <div className="FilmBanner">
                <div className="FilmBannerTitle">
                    <h2>Repertura Cinema City Lublin - Plaza</h2>
                </div>
                <div className="FilmBannerWeek">
                    <SelectDay/>
                </div>
                <div className="FilmBannerSelectedDay">
                    <ThisDay/>
                </div>
            </div>
            <div className="FilmList">
                <FilmList title = {films[0].title} time = {films[0].time} genre = {films[0].genre} playtime = {films[0].view} photo = {films[0].photo}/>
                <FilmList title = {films[1].title} time = {films[1].time} genre = {films[1].genre} playtime = {films[1].view} photo = {films[1].photo}/>
                <FilmList title = {films[2].title} time = {films[2].time} genre = {films[2].genre} playtime = {films[2].view} photo = {films[2].photo}/>
            </div>
        </div>
);
}
export default DisplayFilms;