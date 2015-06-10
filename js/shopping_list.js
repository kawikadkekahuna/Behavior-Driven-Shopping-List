function ShoppingList() {
  this.items = [];
  this.timestamps = [];

  this.addItem = function(item) {
    var thisTimeStamp = Date.now();
  if (item instanceof ShoppingListItem) {
    this.timestamps.push(thisTimeStamp);
    this.items.push(item);
    item.timestamp = thisTimeStamp;
  } else {
    throw new Error('Item is not a ShoppingListItem');
  }
};

this.removeItem = function(item) {
  if (item instanceof ShoppingListItem && this.items.indexOf(item) !== -1) {
    this.items.splice(this.items.indexOf(item), 1);
  }else if (arguments.length === 0) {
    if (this.items.length >= 1) {
      this.items.pop();
    }
  }else{
  //throw new Error('Item is not in the Shopping List');
  }
};
this.render = function() {
  var renderedShoppingList = '<ul>';
  for (var i = 0; i < this.items.length; i++){
    renderedShoppingList += this.items[i].render();
    }
    renderedShoppingList += '</ul>';
    return renderedShoppingList;
  };
}