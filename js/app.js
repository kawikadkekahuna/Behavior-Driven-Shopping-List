var list =  new ShoppingList();
var content = document.getElementById('content');
var title = document.getElementById('title');
var description = document.getElementById('description');


function add_to_shopping_list(){
	var item = new ShoppingListItem(title.value,description.value);
	list.addItem(item);
	var renderedItem = item.render();
	content.innerHTML += renderedItem;
}
//
function changeCheckedStatus(id,checkboxId){
	var compare = list.timestamps.indexOf(id);
	if(list.items[compare].is_done){
		list.items[compare].uncheck();
	}else{
		list.items[compare].check();
	}

}
//Gathers the ID; Not sure why we need checkboxId.
function changeShoppingListItemCheck(event){
	var id = parseInt(event.target.id);
	var checkboxId = document.getElementById(id);
	changeCheckedStatus(id,checkboxId);

}