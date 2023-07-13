import ColorUnit from './ColorUnit.jsx'
import { useState } from 'react';

function ColorBox({ colors }) {
    const [isColor, setIsColor] = useState(0);
    const lengthy = colors.length - 1
    const changeColor = () => {
        if (isColor >= lengthy) {
            setIsColor(isColor - lengthy)
        } else {
            setIsColor(isColor + 1)
        }
    }
    return (
        <>
            <ColorUnit click={changeColor} bgColor={colors[isColor]} />
        </>)
}

export default ColorBox