import { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson-client';

const jsonNLD = 'https://cartomap.github.io/nl/wgs84/gemeente_2020.topojson';

export const dutchMap = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		json(jsonNLD).then((topology) => {
			const { gemeente_2020, provincie_2020 } = topology.objects;
			setData({
				gemeente: feature(topology, gemeente_2020),
				gemeenteBorder: mesh(
					topology,
					gemeente_2020,
					(a, b) => a !== b
				),
				province: feature(topology, provincie_2020),
				provinceBorder: mesh(
					topology,
					provincie_2020,
					(a, b) => a !== b
				),
			});
		});
	}, []);
	return data;
};