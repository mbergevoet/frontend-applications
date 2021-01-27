import React from 'react';
// import { useEffect, useRef, useState } from 'react';

function Controls(props) {
  const { buttonNames } = props;
  return (
    <div>
      <button>{'Zoom uit'}</button>
      {buttonNames.map((d) => (
				<button key={d}>
					{d.name}
				</button>
			))} 
    </div>
  );
}
export default Controls;
