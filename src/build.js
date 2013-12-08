#!/usr/bin/env node
var compiler = require('combustion')();
var readFile = require('fs').readFileSync;
var join = require('path').join;
var reader = function (name) {
  return readFile(join(__dirname, name)) + '';
};

// multiple sequential reads, but whatever
var modules = require(join(__dirname, 'modules.json'));
var coding = reader('coding.html');

var data = {
  css: reader('root.css'),
  profile: reader('profile.html'),
  education: reader('education.html'),
  employment: reader('employment.html'),
  coding: compiler(coding)({ modules: modules }),
  languages: reader('languages.html'),
  interests: reader('interests.html'),
};

var root = reader('root.html');
var build = compiler(root)(data);

process.stdout.write(build);
