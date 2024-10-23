import "./DisplayFilms.css";
let date = new Date();
let format = new Intl.DateTimeFormat('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}).format(date).toUpperCase();
function ThisDay(props){
    return(
        <div className="FilmBannerSelectedDay">
          <p>{format}</p>
        </div>
    );
}
export default ThisDay;