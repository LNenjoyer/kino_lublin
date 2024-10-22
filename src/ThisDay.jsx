import "./DisplayFilms.css";
let date = new Date().toDateString();
function ThisDay(props){
    return(
        <div className="FilmBannerSelectedDay">
          <p>{date}</p>
        </div>
    );
}
export default ThisDay;