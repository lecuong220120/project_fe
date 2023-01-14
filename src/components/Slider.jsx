import React, { useCallback, useEffect, useState } from 'react'
import { GrNext,GrPrevious } from 'react-icons/gr';
import slider from './css/slider.css'
const Slider = () => {
    console.log("abc");
    const data = [
        {
            id: 0,
            path:"https://www.w3schools.com/css/img_5terre_wide.jpg"
        },
        {
            id: 1,
            path:"https://bizweb.dktcdn.net/100/438/408/themes/891802/assets/slider_3_mb.jpg?1673503623261"
        },
        {
            id: 2,
            path:"https://bizweb.dktcdn.net/100/438/408/themes/891802/assets/slider_1_mb.jpg?1673429583228"
        }
    ]
    const [activeSlider, setActiveSlider] = useState(0);
    const preSlider = useCallback(() => {
        let active = activeSlider - 1;
        if(active < 0){
             active = data.length - 1;
        }
        setActiveSlider(active)
    }, [activeSlider, data])
    const nextSlider = useCallback(() =>{
        let active = activeSlider + 1;
        if(active >  data.length - 1){
             active = 0;
        }
        setActiveSlider(active)
    }, [activeSlider, data])
    const checkSlider = (id) =>{
        setActiveSlider(id);
    }
    useEffect(() => {
        const auto = setInterval(()=>{
            nextSlider()
        }, 5000)
        return () => clearInterval(auto);
    }, [data])
  return (
    <div className='slider'>
        <div className="slider-prev" onClick={preSlider}>
            <GrPrevious className='prev'/>
        </div>
        <div className="slider-images">
            {
                data.map((item) => {
                    return(
                        <>
                            <img className={`slider-image ${ activeSlider === item.id ? 'active' : ''}`} src={item.path} />
                        </>
                    )
                })
            }
        </div>
        <div className='shape-master'>
            {
                data.map((item) =>{
                return(
                    <div className={`shape ${item.id === activeSlider ? 'active-shape' : ''}`} onClick = {()=>{checkSlider(item.id)}} ></div>
                )
                })
            }
        </div>
        <div className="slider-next" onClick={nextSlider}>
            <GrNext className='next'/>
        </div>
    </div>
  )
}

export default Slider