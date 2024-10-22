import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const slideImages = [
    {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.pl%2FDark-Knight-Christian-Bale%2Fdp%2FB003IHU5DO&psig=AOvVaw067o3JVaWm_npLQuanNC_T&ust=1729677595321000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjblabdoYkDFQAAAAAdAAAAABAE',
        desc : "WHY SO SERIOUS?"
    },
    {
        url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F1433140%2FThe_Texas_Chain_Saw_Massacre%2F%3Fl%3Dpolish&psig=AOvVaw3tQZLK6XCZLRy7cTfcNmFp&ust=1729677688520000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICYsNbdoYkDFQAAAAAdAAAAABAE',
        desc: "Texas Chansaw Masacre uuu sigma "
    },
    {
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FShark-Tale-Widescreen-Will-Smith%2Fdp%2FB0006JMLRK&psig=AOvVaw0XpmVIMe-lGr-TMyLA1R_N&ust=1729677732166000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMi6uujdoYkDFQAAAAAdAAAAABAE',
        desc : "10/10 movie change my mind"
    }
];
const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle}><img src={slideImage.url} alt={slideImage.desc}/> </span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default Slideshow;