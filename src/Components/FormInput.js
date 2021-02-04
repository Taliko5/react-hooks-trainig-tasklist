import React from 'react';

const FormInput = ({value, onChange}) => {
	return (
		<div className="form-group">
			<label htmlFor="formEventTitle">title</label>
			<input
				type="text"
				className="form-control"
				id="formEventTitle"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default FormInput;
