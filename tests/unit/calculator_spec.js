var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add', function() {
    calculator.numberClick('3');
    calculator.operatorClick('+');
    calculator.numberClick('2');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it('should subtract', function() {
    calculator.numberClick('9');
    calculator.operatorClick('-');
    calculator.numberClick('3');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 6);
  });

  it('should multiply', function() {
    calculator.numberClick('3');
    calculator.operatorClick('*');
    calculator.numberClick('4');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 12);
  });

  it('should divide', function() {
    calculator.numberClick('9');
    calculator.operatorClick('/');
    calculator.numberClick('3');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  });



});
