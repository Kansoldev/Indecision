import React from 'react';

function Options(props) {
	return (
		<div className="content">
			<ol>
			    {
			    	props.value.map((item, i) => 
			    		(
				    		<li key={i}>
				    			{item} <button onClick={() => props.handleRemove(item)}>&times;</button>
				    		</li>
			    		)
			    	)
			    }
			</ol>
		</div>
	);
}

export default Options;