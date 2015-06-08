function ShoppingListItem(name, desc) {
  this.name = name;
  this.description = desc;
  this.is_done;
  this.check = function() {
    this.is_done = true;
  }
  this.uncheck = function() {
    this.is_done = false;
  }
  this.render = function() {
    var html_string = '<ul><li class=completed_' + this.is_done + '><span>' + this.name + '</span><span>' + this.description + '</span></li></ul>';
    return html_string;
  }
}

function ShoppingList() {
  this.items = [];
  this.addItem = function() {

  };
}



