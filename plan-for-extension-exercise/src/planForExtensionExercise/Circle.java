package planForExtensionExercise;

public class Circle implements Shape {

	private double radius;

	public Circle(double radius) {
		this.radius = radius;
	}

	// Computes its own area
	public double getArea() {
		return (Math.PI * this.radius * this.radius);
	}

	//Computes its own circumference
	public double getPerimeter() {
		return (2 * Math.PI * this.radius);
	}
}
