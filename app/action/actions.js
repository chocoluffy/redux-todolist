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
	}
}

export default actions