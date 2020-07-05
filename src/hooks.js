import {useEffect, useState} from 'react'
import {sinify, divideScale} from './util'

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

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h,
    }
}

export const useStyle = (w, h, scale, n) => {
    const sf = sinify(scale)
    const x = w / 2 
    const hGap = h / n 
    const background = '#2196F3'
    const position = 'absolute'
    return {
        getHorizStyle(i) {
            const sfi = divideScale(sf, i, n)
            const sfi1 = divideScale(sfi, 0, 2)
            const sfi2 = divideScale(sfi, 1, 2)
            const left = `${x - (hGap / 2) * sfi1}px`
            const top = `${hGap * i + hGap}px`
            const width = `${hGap * (sf1 + sf2)}px`
            const height = `${Math.min(w, h) / 60}px`
            return {position, left, top, width, height, background}
        },

        getVertStyle(i, j) {
            const sfi = divideScale(sf, i, n)
            const sfij = divideScale(sf, j, 2)
            const top = `${hGap * i}px`
            const left = `${x - (hGap * (1 - 2 * j) * sfi)}px`
            const width = `${Math.min(w, h) / 60}px`
            const height = `${hGap}px`
            return {position, width, height, left, top, background}
        }
    }
}