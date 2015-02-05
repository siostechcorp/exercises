package planForExtensionExercise;

public class Rectangle implements Shape {

	private double height;
	private double width;

	public Rectangle(double height, double width) {
		this.height = height;
		this.width = width;
	}

	// Computes its own area
	public double getArea() {
		return (this.height * this.width);
	}

	// Computes its own perimeter
	public double getPerimeter() {
		return (2*this.height + 2*this.width);
	}
}
