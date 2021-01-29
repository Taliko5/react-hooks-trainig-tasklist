import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers';
import Event from './Event';

const App = () => {
	const [state, dispatch] = useReducer(reducer, []);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const addEvent = (e) => {
		e.preventDefault();
		dispatch({
			type: 'CREATE_EVENT',
			title,
			body,
		});
		setTitle('');
		setBody('');
	};

	const deleteAllEvents = (e) => {
		e.preventDefault();
		const result = window.confirm('are you sure to delete all events?');
		if (result) {
			dispatch({ type: 'DELETE_ALL_EVENTS' });
		}
	};

	const unCreatable = title === '' || body === '';

	return (
		<div className="container-fluid">
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
					disabled={state.length === 0}
				>
					delete all event
				</button>
			</form>

			<h4>list of event</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>body</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{state.map((event, idx) => (
						<Event key={idx} event={event} dispatch={dispatch}></Event>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default App;
