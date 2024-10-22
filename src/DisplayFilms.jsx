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
        title: "Oppenheimer",
        time: "15:00",
        genre: "Dramat",
        playtime: "3h",
        view: "3D",
        photo: "https://imgs.search.brave.com/7SC90bTNnMFxzhR3x-F2cv_jEesMJ0EuNJNOJnEhnuU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI1NDMyOTQzL3Iv/aWwvOTg0MzkzLzUw/MDEzNjQ1MjAvaWxf/Nzk0eE4uNTAwMTM2/NDUyMF9ldGpuLmpw/Zw"
    },
    {
        title: "Interstellar",
        time: "19:00",
        genre: "Scifi",
        playtime: "2h 49min",
        view: "2D",
        photo: "https://imgs.search.brave.com/c3qcBy3lVLFDaYHww5t62YI2Emxe7kPRo7Y3Pfz6IYE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JpZ2luYWxmaWxt/YXJ0LmNvbS9jZG4v/c2hvcC9wcm9kdWN0/cy9pbnRlcnN0ZWxs/YXJfMjAxNF9hZHZh/bmNlX29yaWdpbmFs/X2ZpbG1fYXJ0XzY4/Mjg1MmYyLTIzZjYt/NDZkZS1hMWRiLTQw/MjlkNWI2ZjBiNC5q/cGc_dj0xNTc0Mjg0/MDEwJndpZHRoPTEy/MDA"
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
                <FilmList title = {films[0].title} time = {films[0].time} genre = {films[0].genre} playtime = {films[0].playtime} view = {films[0].view} photo = {films[0].photo}/>
                <FilmList title = {films[1].title} time = {films[1].time} genre = {films[1].genre} playtime = {films[1].playtime} view = {films[1].view} photo = {films[1].photo}/>
                <FilmList title = {films[2].title} time = {films[2].time} genre = {films[2].genre} playtime = {films[2].playtime} view = {films[2].view} photo = {films[2].photo}/>
            </div>
        </div>
);
}
export default DisplayFilms;