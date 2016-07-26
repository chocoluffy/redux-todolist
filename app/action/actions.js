let actions = {
	addTodo: function(text){
		return {
			type: 'ADD_TODO',
			text: text
		}
	},
	removeAll: function(){
		return {
			type: 'REMOVE_ALL'
		}
	},
	completeTodo: function(id){
		return {
			type: 'COMPLETE_TODO',
			id: id
		}
	},
	removeTodo: function(id){
		return {
			type: 'REMOVE_TODO',
			id: id
		}
	},
	changeUserID: function(){
		return {
			type: 'CHANGE_USER_ID',
			userID: Math.round(Math.random()*20) 
		}
	}
}

export default actions