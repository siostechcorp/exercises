package planForExtensionExercise;

public class Rectangle implements Shape {
	private double height;
	private double width;

	public Rectangle(double height, double width) {
		this.height = height;
		this.width = width;
	}

	public double getHeight() {
		return this.height;
	}

	public double getWidth() {
		return this.width;
	}

	public double getArea() {
		return (this.height * this.width);
	}

	public double getPerimeter() {
		return (2*this.height + 2*this.width);
	}
}
