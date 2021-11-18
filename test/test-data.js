// global, for html page
element_offset = require("../element-offset.js");

module.exports = {

	"element_offset()": function (done) {
		return element_offset(document.getElementById('divResult2'), 1) === document.getElementById('divResult3') &&
			element_offset('divResult3', -1) === document.getElementById('divResult2');
	},
	"element_offset()-2": function (done) {
		document.getElementById('divResult2').innerHTML = "<span id='sp1A'>child</span><span id='sp2A'>child</span>";

		return element_offset('sp1A', 1) === document.getElementById('sp2A') &&
			element_offset('sp2A', -1) === document.getElementById('sp1A');
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
