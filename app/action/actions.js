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
			type: "COMPLETE_TODO",
			id: id
		}
	},
	removeTodo: function(id){
		return {
			type: "REMOVE_TODO",
			id: id
		}
	}
}

export default actions