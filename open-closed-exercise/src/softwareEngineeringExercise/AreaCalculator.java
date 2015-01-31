package softwareEngineeringExercise;

public class AreaCalculator {
    public static double calculateArea(Object[] shapes) {
        double area = 0.0;
        
        if (shapes == null) {
            return area;
        }
        
        for (Object shape : shapes) {
            if (shape == null) {
                continue;
            }
            else if (shape instanceof Circle) {
                Circle circle = (Circle)shape;
                area += Math.PI * circle.getRadius() * circle.getRadius();
            }
            else if (shape instanceof Rectangle) {
                Rectangle rectangle = (Rectangle)shape;
                area += rectangle.getHeight() * rectangle.getWidth();
            }
        }
        
        return area;
    }
}
