import "./DisplayFilms.css";

function FilmList(props){
    return(
        <div className="FilmListEntry">
            <div className='FilmListPoster'>
                <img src={props.photo} id='photo'/>
            </div>

            <div className="FilmListInfo">
                <div className='FilmListInfoTitle'><b>{props.title}</b></div>
                <div className='FilmListMidBar'>
                    {/*<div className='FilmListInfoQuestion'><img  id='photo2'*/}
                    {/*    src="https://clipartcraft.com/images/question-mark-transparent-person.png"/></div>*/}
                    <div className='FilmListInfoGenre'><p>{props.genre}&emsp;|</p></div>
                    <div className='FilmListInfoPlaytime'><p>&emsp;{props.playtime}</p></div>
                </div>
                <br/>
                <div className='FilmListInfoView'><b>{props.view}</b></div>
                <div className='FilmListInfoTime'><b>{props.time}</b></div>
            </div>
        </div>
    );
}

export default FilmList;