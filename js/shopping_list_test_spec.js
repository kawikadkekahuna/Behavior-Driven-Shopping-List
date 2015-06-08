var expect = chai.expect;
var should = chai.should();
console.log('h121212i2');

describe('Shopping List Item', function () {
	var apple;
	beforeEach(function () {
		console.log('before each');
		apple = new ShoppingListItem('Apple','tasty red apple');
	});

	it('should be a function', function () {
		ShoppingListItem.should.be.a('function');
	});

	describe('Properties',function(){

		it('should have the correct property name',function(){
			apple.name.should.be.equal('Apple');
		});

		it('should have the correct description',function(){
			apple.description.should.be.equal('tasty red apple');
		});
		it('should have the property is_done',function(){
			apple.is_done.should.equal(false);
		});

	})

	describe('Methods', function () {

		it('should have the check function',function(){
			apple.check();
			apple.is_done.should.equal(true);
		});

		it('should have the uncheck function',function(){
			apple.uncheck();
			apple.is_done.should.equal(false);
		});

		it('should have the render function',function(){
			apple.render.should.be.a('function');
		});

		it('invoking render should have return a string',function(){
      apple.render().should.be.a('string');
		});

    it('invoking render should return an HTML formatted string wrapped in individual <li> tags surrounded by a single <ul> tag',function(){
      apple.render().should.equal('<ul><li class=completed_false><span>Apple</span><span>tasty red apple</span></li></ul>');
    });

    it('invoking render should update the is_completed property',function(){
      apple.check();
      apple.render().should.equal('<ul><li class=completed_true><span>Apple</span><span>tasty red apple</span></li></ul>');
      apple.uncheck();
      apple.render().should.equal('<ul><li class=completed_false><span>Apple</span><span>tasty red apple</span></li></ul>'); 
    });

	});

});

describe('Shopping List', function (){
	var list;
	var apple;
  var banana;
  var lychee;
	beforeEach(function () {
		list = new ShoppingList();
		apple = new ShoppingListItem('Jazz Apple', 'Crunchy Red Apple');
    banana = new ShoppingListItem('Banana','Yellow');
    lychee = new ShoppingListItem('Lychee','White');
	});

	it('should be a function',function(){
		ShoppingListItem.should.be.a('function');

	});
	describe('Properties', function () {
		
		it('should have the property items', function () {
			list.should.have.property("items");
		});

		it('items should be an empty array', function(){
			list.items.should.be.a('array');
			list.items.should.have.length(0);
		});

	});
	describe('Methods', function () {

		it('should have the addItem method',function(){
			list.addItem.should.be.a("function");

		});

		it('invoking addItem should add the object to the items array', function () {
			list.addItem(apple);
			list.items.length.should.equal(1);
		});

		it('invoking addItem should only accept an instance of ShoppingListItem in the parameters, and throw an Error otherwise',function(){
			
			expect(list.addItem.bind(list, 'Apple')).to.throw('Item is not a ShoppingListItem');
			expect(list.addItem.bind(list, apple)).to.not.throw('Item is not a ShoppingListItem');
		});
  });
});
