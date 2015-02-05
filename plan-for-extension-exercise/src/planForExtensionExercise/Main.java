package planForExtensionExercise;

public class Main {
	public static void main(String[] args) {
		Circle circle = new Circle(25);
		Rectangle rectangle = new Rectangle(10, 20);
		Rectangle square = new Rectangle(10, 10);
		
		Triangle triangle = new Triangle (3,4,5);
		
		Shape[] shapes = { circle, rectangle, square };
		Shape[] shapes2 = { circle, rectangle, square, triangle };
		double totalArea = TotalAreaCalculator.calculateArea(shapes);
		System.out.println("The total area is " + totalArea + ".");

		double totalArea2 = TotalAreaCalculator.calculateArea(shapes2);
		System.out.println("The total area with triangle is " + totalArea2 + ".");

	}
}
