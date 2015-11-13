/**
 * Created by 35376 on 11/13/2015.
 */


var should = require('chai').should()
  , expect = require('chai').expect
  , Logger = require('../index')
  , stdout = require("test-console").stdout;


describe('Logger', function() {



  it('should return an instance when you create a new Logger', function () {

    var logger = new Logger();

    expect((typeof logger) === 'Logger');

  });
  describe('Logger::log: should write to the std out', function () {
    it('should write to the console', function () {
      var logger = new Logger();

      var inspect = stdout.inspect();

      logger.log("yeah no");

      inspect.restore();

      expect(inspect.output.toString().trim()).to.equal("yeah no");


    })
  })



});


function streamToString(stream, cb) {
  const chunks = [];
  stream.on('data', function(chunk){
    chunks.push(chunk);
  });
  stream.on('end', function(){
    cb(chunks.join(''));
  });
}
