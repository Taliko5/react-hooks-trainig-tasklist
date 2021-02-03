import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import OperationLog from './OperationLog';

const OperationLogs = () => {
	const { state } = useContext(AppContext);
	return (
		<>
			<h4>list of logs</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>description</th>
						<th>date</th>
					</tr>
				</thead>
        <tbody>
          {
            state.operationLogs.map((log, idx) => {
              return <OperationLog key={idx} log={log} />
            })
          }
        </tbody>
			</table>
		</>
	);
};

export default OperationLogs;
