var list =  new ShoppingList();
var content = document.getElementById('content');
var title = document.getElementById('title');
var description = document.getElementById('description');


function add_to_shopping_list(){
	var item = new ShoppingListItem(title.value,description.value);
	var check = document.getElementById(item.name);
	var renderedItem = item.render();
	list.addItem(item);
	content.innerHTML += renderedItem;
}

function changeCheckedStatus(idx,element){

	

}

function changeShoppingListItemCheck(event){
	console.log(event);
	console.log('idx',event.target.id);
	console.log('element',document.getElementById(event.target.id).checked);
	var idx = event.target.id;
	var element = document.getElementById(event.target.id);
	console.log(element);
	changeCheckedStatus(idx,element);

}