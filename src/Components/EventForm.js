import React, { useState, useContext } from 'react';
import {
	CREATE_EVENT,
	DELETE_ALL_EVENTS,
	ADD_OPERATION_LOG,
	DELETE_ALL_OPERATION_LOG,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
	const { state, dispatch } = useContext(AppContext);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addEvent = (e) => {
		e.preventDefault();
		dispatch({
			type: CREATE_EVENT,
			title,
			body,
		});
		dispatch({
			type: ADD_OPERATION_LOG,
			description: 'creating event',
			operatedAt: timeCurrentIso8601(),
		});
		setTitle('');
		setBody('');
	};

	const deleteAllEvents = (e) => {
		e.preventDefault();
		const result = window.confirm('are you sure to delete all events?');
		if (result) {
			dispatch({ type: DELETE_ALL_EVENTS });
			dispatch({
				type: ADD_OPERATION_LOG,
				description: `all events are deleted`,
				operatedAt: timeCurrentIso8601(),
			});
		}
	};

	const unCreatable = title === '' || body === '';

	return (
		<>
			<h4>form tag</h4>
			<form action="">
				<div className="form-group">
					<label htmlFor="formEventTitle">title</label>
					<input
						type="text"
						className="form-control"
						id="formEventTitle"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formEventBody">Body</label>
					<textarea
						type="text"
						className="form-control"
						id="formEventBody"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</div>
				<button
					className="btn btn-primary"
					onClick={addEvent}
					disabled={unCreatable}
				>
					create event
				</button>
				<button
					className="btn btn-danger"
					onClick={deleteAllEvents}
					disabled={state.events.length === 0}
				>
					delete all event
				</button>
			</form>
		</>
	);
};

export default EventForm;
