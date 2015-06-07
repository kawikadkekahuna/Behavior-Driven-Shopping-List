var expect = chai.expect;
var should = chai.should();
console.log('hi2');

describe('Shopping List Item', function () {
	var item1;
	beforeEach(function () {
		console.log('before each');
		item1 = new ShoppingListItem('Apple','tasty red apple');
	});

	it('should be a function', function () {
		item1.should.be.a('function');	
	});


	it('should have the correct property name',function(){	
		item1.name.should.be.equal('Apple');
	});
	
	it('should have the correct description',function(){
		item1.description.should.be.equal('tasty red apple');
	});
	it('should have the property is_done',function(){
		(typeof item1.is_done).should.equal('undefined');
	});

	describe('Shopping List Item methods', function () {
		var item1;
		beforeEach(function () {
			console.log('before each');
			item1 = new ShoppingListItem('Apple','tasty red apple');
		});
				
		it('should have the check function',function(){
			item1.check();
			item1.is_done.should.equal(true);
		});

		it('should have the uncheck function',function(){
			item1.uncheck();
			item1.is_done.should.equal(false);
		});

		it('should have the render function',function(){
			item1.render.should.be.a('function');
		});
		it('render should have return a string',function(){
			var htmlstring = item1.render();
			htmlstring.should.be.a('string');
		});
	});

});
