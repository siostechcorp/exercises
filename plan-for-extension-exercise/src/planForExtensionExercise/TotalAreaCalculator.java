package planForExtensionExercise;

public class TotalAreaCalculator extends AreaCalculator {
	public static double calculateArea(Shape[] shapes) {
		double area = 0.0;
		if (shapes == null) {
			return area;
		}
		// AreaCalculator returns aggregate area for circles and rectangles,
		// but other shapes must be dealt with separately
		area = AreaCalculator.calculateArea(shapes);

		// Add area of other shapes
		for (Shape shape : shapes) {

			if (shape == null || shape instanceof Circle
					|| shape instanceof Rectangle)
				continue;
			else
				area += shape.getArea();

		}
		return area;
	}
}
