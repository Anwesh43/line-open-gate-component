import React from 'react'
import {useAnimatedScale, useDimension, useStyle} from './hooks'
import LineGateOpenPresentational from './LineGateOpenPresentational'

const LineGateOpenComponent = ({n}) => {
    const {scale, i, start} = useAnimatedScale(0.02 / 2, 20, n)
    const {w, h} = useDimension()
    const {getButtonStyle} = useStyle(w, h, scale, n)
    return <div>
        <LineGateOpenPresentational w = {w} h = {h} scale = {scale} curr = {i} n = {n}/>
        <button style = {getButtonStyle()} onClick = {start}>Start</button>
    </div>
}

export default LineGateOpenComponent