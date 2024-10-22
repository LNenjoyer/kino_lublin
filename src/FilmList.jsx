import "./DisplayFilms.css";

function FilmList(props){
    return(
        <div className="FilmListEntry">
            <div className='Poster'>
                <img src={props.photo}/>
            </div>
            <div className="Info">
                <div className='Title'><p>{props.title}</p></div>
                <div className='Question'><img
                    src="https://clipartcraft.com/images/question-mark-transparent-person.png"/></div>
                <div className='Genre'><p>{props.genre}</p></div>
                <div className='Playtime'><p>{props.playtime}</p></div>
                <div className='Time'><p>{props.time}</p></div>
                <div className='View'><p>{props.view}</p></div>
            </div>
        </div>
    );
}

export default FilmList;