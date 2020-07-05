import React from 'react'
import {useStyle} from './hooks'
const Line = ({style}) => {
    console.log(style)
    return <div style = {style}>
      </div>
}

const LineGateOpen = ({w, h, scale, i, n}) => {
    const {getHorizStyle, getVertStyle} = useStyle(w, h, scale, n)
    return <div>
          <Line key = {`horiz_line_${i}`} style = {getHorizStyle(i)}>
          </Line>
          {[0, 1].map(j => <Line key = {`vert_line_${i}_${j}`} style = {getVertStyle(i, j)}/>)}
      </div>
}

const getLineGateOpenComponents = (w, h, scale, n, curr) => {
    const components = []
    for (let i = 0; i < n; i++) {
        components.push(<LineGateOpen  w = {w}  h = {h} scale = {curr == i ? scale : 0} i = {i} n = {n} key = {`line_gate_${i}`}/>)
    }
    return components
}

const LineGateOpenPresentational = ({w, h, n, curr, scale}) => {
    return <React.Fragment>
        {getLineGateOpenComponents(w, h, scale, n, curr)}
    </React.Fragment>
}

export default LineGateOpenPresentational