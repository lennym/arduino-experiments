var Board = require('firmata').Board;
var board = new Board('/dev/tty.usbmodem411', function () {
	var i = 0;
	board.pinMode(7, board.MODES.OUTPUT);
	setInterval(function () {
		board.digitalWrite(7, i++%2 ? board.HIGH: board.LOW);
	}, 100)
});