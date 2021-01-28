import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<div className="container-fluid">
			<h4>form tag</h4>
			<form action="">
				<div className="form-group">
					<label htmlFor="formEventTitle">title</label>
					<input type="text" className="form-control" id="formEventTitle" />
				</div>
				<div className="form-group">
					<label htmlFor="formEventBody">Body</label>
					<textarea type="text" className="form-control" id="formEventBody" />
				</div>
				<button className="btn btn-primary">create event</button>
				<button className="btn btn-danger">delete all event</button>
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
					<tbody>

					</tbody>
				</thead>
			</table>
		</div>
	);
};

export default App;
