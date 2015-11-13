
var fs = require('fs');
var Console = require('console').Console;

function Logger() {

  this.logger = null;
  this.stdOut = process.stdout;
  this.stdErr = process.stderr;
  return this;
}

Logger.prototype.withStandardOut = function(filePath) {
  this.stdOut = fs.createWriteStream(filePath);
  return this;
};

Logger.prototype.withErrorOut = function(filePath) {
  this.errOut = fs.createWriteStream(filePath);
  return this;
};

Logger.prototype.log = function() {
  this.logger = new Console(this.stdOut, this.stdErr);
  var args = [];
  Array.prototype.push.apply( args, arguments);

  this.logger.log(args.shift());
};

Logger.prototype.error = function() {
  this.logger = new Console(this.stdOut, this.stdErr);
  var args = [];
  Array.prototype.push.apply( args, arguments);

  this.logger.error(args.shift());
};


module.exports = Logger;