package planForExtensionExercise;

public class PerimeterCalculator {

	// Calculates the aggregate perimeter for an array of shapes
	public static double calculatePerimeter(Shape[] shapes) {

		double perimeter = 0.0;

		if (shapes == null) {
			return perimeter;
		}

		for (Shape shape : shapes) {
			if (shape == null) {
				continue;
			}
			else {
				perimeter += shape.getPerimeter();
			}
		}
		return perimeter;
	}
}
