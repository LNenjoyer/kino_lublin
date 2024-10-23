import "./DisplayFilms.css";
function SetDay(props){
    var setDay = props;
    // console.log(props);
}
function SelectDay(props){
    var setDay = 0;
    return(
        <div className="FilmBannerWeek">
            <button id="Monday" onClick={SetDay(1)}   className="FilmBannerDay">Pn</button>
            <button id="Tuesday" onClick={SetDay(2)}    className="FilmBannerDay">Wt</button>
            <button id="Wensday" onClick={SetDay(3)}     className="FilmBannerDay">Śr</button>
            <button id="Thursday" onClick={SetDay(4)}   className="FilmBannerDay">Cz</button>
            <button id="Friday" onClick={SetDay(5)}      className="FilmBannerDay">Pt</button>
        </div>
    );
}
// export default setDay;
export default SelectDay;