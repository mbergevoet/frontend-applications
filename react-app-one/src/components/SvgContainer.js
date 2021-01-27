import React, { useEffect, useRef, useState, createContext, } from 'react'
const Context = React.createContext(null)

export function SvgContainer({ width, height, children }) {
  const svgRef = useRef(null)
  const [svg, setSvg] = useState(null)
  useEffect(() => setSvg(svgRef.current), [])
  return (
    <svg ref={svgRef} width={width} height={height}>
      <Context.Provider value={svg}>{children}</Context.Provider>
    </svg>
  )
}

export function useSvg() {
  return React.useContext(Context)
}

// source https://adamcarter.dev/creating-visualizations-with-d3-and-react/
