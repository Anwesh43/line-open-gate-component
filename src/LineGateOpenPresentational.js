import React from 'react'
import {useStyle} from './hooks'
const Line = ({style}) => {
    return <div style = {style}>
      </div>
}

const LineGateOpen = ({w, h, scale, i, n}) => {
    const {getHorizStyle, getVertStyle} = useStyle(w, h, scale, n)
    return <div>
          <Line key = {`horiz_line_${i}`} style = {getHorizStyle(i)}>
          </Line>
          {[0, 1].map(j => <Line key = {`vert_line_${i}_${j}`} stlye = {getVertStyle(i, j)}/>)}
      </div>
}

const getLineGateOpenComponents = (w, h, scale, n) => {
    const components = []
    for (let i = 0; i < n; i++) {
        components.push(<LineGateOpen key = {`line_gate_${i}`}/>)
    }
    return components
}

const LineGateOpenPresentational = ({w, h, n, scale}) => {
    return <React.Fragment>
        {getLineGateOpenComponents(w, h, scale, n)}
    </React.Fragment>
}

export default LineGateOpenPresentational