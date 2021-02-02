import React from 'react';
import { DELETE_EVENT } from '../actions';

const Event = ({ dispatch, event }) => {
	const id = event.id;
	const handleClickDeleteButton = () => {
		const result = window.confirm(`are you sure to delete id:${id}'s event?`);
		if (result) {
			dispatch({ type: DELETE_EVENT, id });
		}		
	};
	return (
		<>
			<tr>
				<td>{event.id}</td>
				<td>{event.title}</td>
				<td>{event.body}</td>
				<td>
					<button
						type="button"
						className="btn btn-danger"
						onClick={handleClickDeleteButton}
					>
						delete
					</button>
				</td>
			</tr>
		</>
	);
};

export default Event;
