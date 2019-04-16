function createMatrix(rows, columns) {
	var arr = new Array();
	for (var i = 1; i <= rows; i++) {
		arr[i] = new Array();
		for (var j = 1; j <= columns; j++) {
			arr[i][j] = i * j;
		}
	}
	return arr;
}
var myArr = createMatrix(9, 9);
for (var i = 1; i <= 9; i++) {
	var p_cell = document.createElement('P');
	for (var j = 1; j <= 9; j++) {
		var p_cell = document.createElement('P');
		if (i == j) {
			p_cell.classList.add('green');
		} else if (i > j) {
			p_cell.classList.add('blue');
		} else {
			p_cell.classList.add('yellow');
		}
		p_cell.innerHTML = myArr[i][j];
		var cell = document.getElementById('main').appendChild(p_cell);
	}
}
