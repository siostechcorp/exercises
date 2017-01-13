package planForExtensionExercise;

public class AreaCalculator {

	// Calculates the aggregate area for an array of Shapes
	public static double calculateArea(Shape[] shapes) {

		double area = 0.0;

		if (shapes == null) {
			return area;
		}

		for (Shape shape : shapes) {
			if (shape == null) {
				continue;
			}
			else {
				area += shape.getArea();
			}
		}
		return area;
	}
}
