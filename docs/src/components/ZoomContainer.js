import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { useSvg } from "./SvgContainer";

export function ZoomContainer({ children }) {
    const svgElement = useSvg();
    const [{ x, y, k }, setTransform] = useState({ x: 0, y: 0, k: 1 });

    useEffect(() => {
        if (!svgElement) return;

        const selection = d3.select(svgElement);
        const zoom = d3.zoom()
            .on('zoom',  (e) => {
                setTransform(e.transform)
            });

        selection.call(zoom);

        return () => selection.on(".zoom", null);
    }, [svgElement]);

    return <g transform={`translate(${x}, ${y}) scale(${k})`}>{children}</g>;
}

// source https://adamcarter.dev/creating-visualizations-with-d3-and-react/
