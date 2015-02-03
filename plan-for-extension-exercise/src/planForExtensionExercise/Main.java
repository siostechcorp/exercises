package planForExtensionExercise;

public class Main {

	public static void main(String[] args) {

		Circle circle = new Circle(25);
		Rectangle rectangle = new Rectangle(10, 20);
		Rectangle square = new Rectangle(10, 10);
		Triangle triangle = new Triangle(3,4,5);
		
		Shape[] shapes = { circle, rectangle, square, triangle };

		double totalArea = AreaCalculator.calculateArea(shapes);
		System.out.println("The total area is " + totalArea + ".");

		double totalPerimeter = PerimeterCalculator.calculatePerimeter(shapes);
		System.out.println("The total perimeter is " + totalPerimeter + ".");

	}
}
