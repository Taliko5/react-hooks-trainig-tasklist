// action = {
// 	type: 'create_event',
// 	title: 'this is a title',
// 	body: 'this is body',
// }

// state = []
// state = [
// { id: 1, title: 'title', body: 'body'},
// { id: 2, title: 'title', body: 'body'}
// { id: 3, title: 'title', body: 'body'}
// ]

const events = (state = [], action) => {
	switch (action.type) {
		case 'CREATE_EVENT':
			const event = { title: action.title, body: action.body };
			const lengthOfState = state.length;
			const id = lengthOfState === 0 ? 1 : state[lengthOfState - 1].id + 1;
			return [...state, { id, ...event }];
		case 'DELETE_EVENT':
			return state.filter((event) => event.id !== action.id);
		case 'DELETE_ALL_EVENTS':
			return [];
		default:
			return state;
	}
};

export default events;
