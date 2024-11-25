import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => {
    const sliderRef = useRef();

    const slideRight =()=>{
        sliderRef.current.slickNext();
    };
    const slideleft =()=>{
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[{
            breakpoint:769,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
    ]
    };

  return (
    <section className="experience-container">
        <h5>Work Experience</h5>

        <div className="experience-content">
            <div className="arrow-right" onClick={slideRight}>
                <span className='material-symbols-outlined'>chevron_right</span>
            </div>
            <div className="arrow-left" onClick={slideleft}>
                <span className='material-symbols-outlined'>chevron_left</span>
            </div>
        <Slider ref={sliderRef} {...settings}>

            {WORK_EXPERENCE.map((item)=>(
                <ExperienceCard key={item.title} details={item} />
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience
