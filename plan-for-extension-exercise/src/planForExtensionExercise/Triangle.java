package planForExtensionExercise;

public class Triangle extends Shape {

	//Triangle may be scalene
	private double side1, side2, side3;

	public Triangle(double side1, double side2, double side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	// Computes its own area - using Heron's Formula
	public double getArea() {
		double s = 0.5 * getPerimeter();
		return (Math.sqrt(s * (s-this.side1) * (s-this.side2) * (s-this.side3)));
	}

	//Computes its own perimeter
	public double getPerimeter() {
		return (this.side1 + this.side2 + this.side3);
	}
}
