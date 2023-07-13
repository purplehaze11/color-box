import { useState } from 'react';

function randColor(arr) {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

function ColorBox({ colors }) {

    const [isColor, setIsColor] = useState(randColor(colors));
    const changeColor = () => {
        setIsColor(randColor(colors))
    }
    return <div className='w-40 h-40' onClick={changeColor} style={{ backgroundColor: isColor }}></div >
}

export default ColorBox