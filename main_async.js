﻿var fs = require("fs");

fs.readFile('input1.txt', function (err, data) {
	if (err) return console.error(err.stack);
	console.log(data.toString());
});

console.log("程序执行结束！");