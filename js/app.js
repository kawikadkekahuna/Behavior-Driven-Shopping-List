var list =  new ShoppingList();
var content = document.getElementById('content');
var title = document.getElementById('title');
var description = document.getElementById('description');

function changeShoppingListItemCheck(event){
	var id = parseInt(event.target.id);
	var checkboxId = document.getElementById(id);
	changeCheckedStatus(id,checkboxId);

}
function getID_to_remove(event){
	//console.log(event.target.id);
	var id = parseInt(event.target.id);
	//console.log('id' + id);
	remove_from_shopping_list(id);

}
function add_to_shopping_list(){
	var item = new ShoppingListItem(title.value,description.value);
	list.addItem(item);
	var renderedItem = item.render();
	content.innerHTML += renderedItem;
}

function remove_from_shopping_list(id){
	var content = document.getElementById('content');
	var indexID = list.timestamps.indexOf(id);
	content.childNodes[indexID].remove();
	list.timestamps.splice(indexID, 1);
	list.removeItem(list.items[indexID]);
	//console.log(id);
	//content.childNodes[0].remove()
	//list.removeItem(list.timestamp[0])
	//list.removeItem(list.items[0]);
}

//
function changeCheckedStatus(id,checkboxId){
	var indexID = list.timestamps.indexOf(id);
	if(list.items[indexID].is_done){
		list.items[indexID].uncheck();
	}else{
		list.items[indexID].check();
	}

}
//Gathers the ID; Not sure why we need checkboxId.
