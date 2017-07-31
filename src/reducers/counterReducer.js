const counterReducer = (state = 0,action) => {
	switch(action.type){
		//case 'DECREASE':
		//	return state - action.number;
		case 'INCREMENT':
			return state + action.number;
		default:
			return state;
	}
}

export default counterReducer;