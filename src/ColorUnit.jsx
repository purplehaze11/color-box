function ColorUnit({ click, bgColor }) {
    return (
        <div className='w-40 h-40' onClick={click} style={{ backgroundColor: bgColor }}></div >
    )
}

export default ColorUnit