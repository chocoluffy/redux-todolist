let userReducer = function reducer(user = {}, action){
	switch (action.type){
		case 'CHANGE_USER_ID':
			return Object.assign({}, state.user,  {userID: action.userID})
		default:
			return user;
	}
}

export default userReducer;