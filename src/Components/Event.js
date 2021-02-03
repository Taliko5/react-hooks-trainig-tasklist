import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { DELETE_EVENT } from '../actions';

const Event = ({ event }) => {
	const id = event.id;
	const { dispatch } = useContext(AppContext);
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
