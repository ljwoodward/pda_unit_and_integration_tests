var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {

  // let running_total;

  beforeEach(function() {
    running_total = element(by.css('#running_total'))

    one = element(by.css('#number1'));
    two = element(by.css('#number2'));
    three = element(by.css('#number3'));
    four = element(by.css('#number4'));
    five = element(by.css('#number5'));
    six = element(by.css('#number6'));
    seven = element(by.css('#number7'));
    eight = element(by.css('#number8'));
    nine = element(by.css('#number9'));
    zero = element(by.css('#number0'));

    plus = element(by.css('#operator_add'));
    minus = element(by.css('#operator_subtract'));
    times = element(by.css('#operator_multiply'));
    divide = element(by.css('#operator_divide'));
    equals = element(by.css('#operator_equals'));

    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    // running_total = element(by.css('#running_total'))
    two.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should update the dispay with the running total on clicking operator buttons (plus)', function() {
    two.click();
    plus.click();
    three.click();
    plus.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  });

  it('should update the dispay with the running total on clicking operator buttons (minus)', function() {
    five.click();
    minus.click();
    one.click();
    minus.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should update the dispay with the running total on clicking operator buttons (times)', function() {
    six.click();
    times.click();
    seven.click();
    times.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('42');
  });

  it('should update the dispay with the running total on clicking operator buttons (divide)', function() {
    eight.click();
    divide.click();
    two.click();
    divide.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should update the dispay with the running total on clicking operator buttons (equals)', function() {
    nine.click();
    divide.click();
    two.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4.5');
  });

  it('should be able to chain multiple operations together', function() {
    two.click();
    plus.click();
    three.click();
    times.click();
    four.click();
    divide.click();
    five.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should work for large numbers', function() {
    one.click();
    six.click();
    four.click();
    seven.click();
    two.click();
    minus.click();
    five.click();
    three.click();
    nine.click();
    eight.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('11074');
  });

  it('should work for negative numbers', function() {
    three.click();
    minus.click();
    five.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-2');
  });

// added to the code in calculator.js (line 73), to return 'err', rather than 'Infinity'.
  it('should return error when dividing by zero', function() {
    eight.click();
    divide.click();
    zero.click();
    equals.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('err');
  });


});
