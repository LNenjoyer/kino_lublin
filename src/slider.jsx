import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ryby from './opowiesc_o_rybach.jpg';
import pila from './texas_chansaw_masacre.jpg';
import batman from './batman.jpg';
import './slider.css';


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
                        <div className="diving">
                        <span className="Span"><img src={slideImage.img} alt={slideImage.desc} id="movies"/> </span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}
export default Slideshow;