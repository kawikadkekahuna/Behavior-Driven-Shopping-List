function ShoppingListItem(name, desc) {
  this.name = name;
  this.description = desc;
  this.timestamp = 0;
  this.is_done = false;
  this.check = function() {
    this.is_done = true;
  };
  this.uncheck = function() {
    this.is_done = false;
  };
  this.render = function() {
    var checkbox;
    var html_string = '<ul><li class=completed_' + this.is_done + '><span>' + this.name + '</span><span> ' + this.description + '<input type="checkbox" id="'+this.timestamp+'" onchange="changeShoppingListItemCheck(event)"><Button id='+this.timestamp+' onclick="getID_to_remove(event)">x</span></li></ul>';
      
    return html_string;
  };
}