import React, { useState, useEffect } from "react"

const ScreenSize = () => {
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
})
    
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return() => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return (
        <div>
            
        </div>
    )
}

export default ScreenSize