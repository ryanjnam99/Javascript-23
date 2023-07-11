import React from 'react'
import { useParams } from "react-router";

const WordOrNumber = (props) => {
    const { wordOrNumber, fontColor, fontBackground } = useParams();
    const colorStyle = {
        color: fontColor, 
        backgroundColor: fontBackground,
    }
    return (
        <div>
            {
                (isNaN(wordOrNumber))?
                <p style={colorStyle}>The word is {wordOrNumber}</p>:
                <p style={colorStyle}>The number is {wordOrNumber}</p>
            }
        </div>
    )
}

export default WordOrNumber