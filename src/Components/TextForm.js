import React from 'react';

const TextForm = ({value, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor="formEventBody">Body</label>
			<textarea
				type="text"
				className="form-control"
				id="formEventBody"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default TextForm;
