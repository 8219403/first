   function Figure (x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
	
	Figure.prototype.move = function (newX, newY) {
		this.x = newX;
		this.y = newY;
		
	};

	Figure.prototype.print = function () {
		console.log('Значение х: ' + this.x + '\nЗначение y: ' + this.y + '\nТип фигуры: ' + this.type);
	};
	
	var p = new Figure (50, 40, 'circle');
	p.print();
	

	
	