import React from 'react';
import Event from './Event';

const Events = ({state, dispatch}) => {
	return (
		<>
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
		</>
	);
};

export default Events;
