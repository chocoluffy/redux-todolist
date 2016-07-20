export default actions = {
	addTodo: function(text){
		return {
			type: 'ADD_TODO',
			text: text
		}
	}
}