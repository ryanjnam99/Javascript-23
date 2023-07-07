import React, { useState } from 'react';
import './Box.module.css'

const Generator = (props) => {
    const [color, setColor] = useState('');
    const [box, setBoxes] = useState([]);

    const handleColorShift = (e) => {
        setColor(e.target.value);
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        if (color.trim() !== '') {
            setBoxes((prevBoxes) => [...prevBoxes, color]);
            setColor('');
        }
    };
    return (
        <div>
            <form onClick={handleOnClick}>
                <label>Color:
                    <input type="text" value={color} onChange={handleColorShift} />
                </label>
                <button type="submit">Add Box</button>
            </form>
            <div className="box-container">
                {box.map((boxColor, index) => (
                    <div
                        key={index}
                        className="box"
                        style={{ backgroundColor: boxColor }}
                    ></div>
                ))}
            </div>

            <style>
                {`
                .box-container {
                    display: flex;
                    flex-wrap: wrap;
                }
                .box {
                    width: 100px;
                    height: 100px;
                    margin: 5px;
                }
                `}
            </style>
        </div>
    );
};

export default Generator