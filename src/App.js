import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import "bootstrap/dist/css/bootstrap.css"; 
import './App.css';

function SliderRadius() {
    const [sliderValue, setSliderValue] = useState(0);
    const [sliderValue2, setSliderValue2] = useState(0);
    const [sliderValue3, setSliderValue3] = useState(0);
    const [sliderValue4, setSliderValue4] = useState(0);


    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };
    const handleSliderChange2 = (e) => {
        setSliderValue2(e.target.value);
    };
    const handleSliderChange3 = (e) => {
        setSliderValue3(e.target.value);
    };
    const handleSliderChange4 = (e) => {
        setSliderValue4(e.target.value);
    };


    return (
        <div className="outer">
            <div className='imgDiv'>
            <Image src= "https://dbdzm869oupei.cloudfront.net/img/photomural/preview/48465.png" style={{WebkitBorderRadius: `${sliderValue}px ${sliderValue2}px ${sliderValue3}px ${sliderValue4}px` }} fluid /> 
            </div>
            <div>
                <Form.Range
                    value={sliderValue}
                    name='hello'
                    onChange={handleSliderChange}
                    max='300'
                    className="custom-slider slider-range"/>
                <Form.Range
                    value={sliderValue2}
                    name='hello'
                    onChange={handleSliderChange2}
                    max='300'
                    className="custom-slider slider-range"/>
                <Form.Range
                    value={sliderValue3}
                    name='hello'
                    onChange={handleSliderChange3}
                    max='300'
                    className="custom-slider slider-range"/>
                <Form.Range
                    value={sliderValue4}
                    name='hello'
                    onChange={handleSliderChange4}
                    max='300'
                    className="custom-slider slider-range"/>
                <p>Selected Value: {sliderValue}</p>
                <p>Selected Value: {sliderValue2}</p>
                <p>Selected Value: {sliderValue3}</p>
                <p>Selected Value: {sliderValue4}</p>


            </div>
        </div>
    );
}
 
export default SliderRadius;

