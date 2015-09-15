/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 02.02.12
 */

var GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello World.", greeter.greet("World"));
};