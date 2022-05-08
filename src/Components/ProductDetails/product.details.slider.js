import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './product.details.slider.css'
import { slideshowdata } from '../../data/slideshow.data';



export default function DetailsSlider(props){
    const { id } = props.id
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        autoplay:false,
        infinite: true,
        prevArrow: <div className='prev-arrow' ><img src='../../icons/details/previous-arrow.svg' /></div>,
        nextArrow: <div className='next-arrow'><img src='../../icons/details/next-arrow.svg'/></div>
      }
    return(
        <div className='slider'>
          <Slide {...properties}>
          {slideshowdata.map((slide)=>(
            <div  className="each-slide slide">
                <div >
                    <div className='det'>
                        <h6 style={{marginTop:'6px'}} className='det-text'>{slide.details.area}</h6>
                        <div className='det-img'>
                            <img src='../../icons/details/area-floor-size.svg' width={71.37} height={42.04} />
                        </div>
                    </div>
                    <div className='det'>
                        <h6 style={{marginTop:'7px'}} className='det-text' >{slide.details.height}</h6>
                        <div className='det-img'>
                            <img src='../../icons/details/measurement-vertical.svg' width={25.67} height={38.26} />
                        </div>
                    </div>
                    <div className='det'>
                        <h6 style={{marginTop:'15px'}} className='det-text'>{slide.details.weight}</h6>
                        <div className='det-img'>
                            <img src='../../icons/details/kg-measure-weight.svg' width={39.78} height={46.42} />
                        </div>                        
                    </div>
                    <div className='det'>
                        <h6 style={{marginTop:'12px'}} className='det-text'>{slide.details.wheels}</h6>
                        <div className='det-img'>
                            <img src='../../icons/details/wheel.svg' width={47} height={47} />
                        </div>
                    </div>
                    <div className='det'>
                        <h6 style={{marginTop:'14px'}} className='det-text'>{slide.details.textile}</h6>
                        <div className='det-img'>
                            <img src='../../icons/details/textile.svg' width={47.35} height={47.82} />
                        </div>
                    </div>
                    <div className='det'>
                        <h6 style={{marginTop:'11px',width: '150px'}} className='det-text'>{slide.details.woodenStool}</h6>
                        <div className='det-img'>
                            <img src='../../icons/details/wooden-stool.svg' width={47.04} height={43.17} />
                        </div>
                    </div>
                </div>
                <img width={'500px'} height={'500px'} src={'../../'+slide.image} />
              </div>
          ))}
              
              
          </Slide>
        </div>
    );
}