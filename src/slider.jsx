import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ryby from './opowiesc_o_rybach.jpg';
import pila from './texas_chansaw_masacre.jpg';
import batman from './batman.jpg';
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
        img : batman,
          desc : "WHY SO SERIOUS?"
    },
    {
        img : pila,
        desc: "Texas Chansaw Masacre uuu sigma "
    },
    {
        img : ryby,
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
                        <span style={spanStyle}><img src={slideImage.img} alt={slideImage.desc}/> </span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default Slideshow;