import {useEffect, useState} from 'react'

export const useAnimatedScale = (scGap, delay, n) => {
    const [scale, setScale] = useState(0)
    const [dir, setDir] = useState(1)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    return {
        i,
        scale, 
        start() {
            if (!animated) {
                var currScale = 0
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap * dir 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        if (i + dir < n || i + dir >= 0) {
                            setI(i + dir)
                        } else {
                            setDir(dir * -1)
                        }
                    }
                }, delay)
            }
        }
    }
}