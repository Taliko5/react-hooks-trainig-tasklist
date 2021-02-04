import React, { useState, useContext } from 'react';
import {
	CREATE_EVENT,
	DELETE_ALL_EVENTS,
	ADD_OPERATION_LOG,
	DELETE_ALL_OPERATION_LOG,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';
import FormInput from './FormInput';
import TextForm from './TextForm';

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

	const deleteAllLogs = (e) => {
		e.preventDefault();
		const result = window.confirm('are you sure to delete all logs?');
		if (result) {
			dispatch({
				type: DELETE_ALL_OPERATION_LOG,
			});
		}
	};

	const unCreatable = title === '' || body === '';

	return (
		<>
			<h4>form tag</h4>
			<form action="">
				<FormInput value={title} onChange={setTitle} />
				<TextForm value={body} onChange={setBody}/>
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
				<button
					className="btn btn-danger"
					onClick={deleteAllLogs}
					disabled={state.operationLogs.length === 0}
				>
					delete all logs
				</button>
			</form>
		</>
	);
};

export default EventForm;
