//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getwidth(){
		return this.width;
	}
	getheight(){
		return this.height;
	}
	getArea(){
		return width*height;
	}
}

class Square extends Animal {
constructor(width)
	{
		super(width,height);
	}
	
	getPerimeter(){
	return 2*(height+width);	
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
