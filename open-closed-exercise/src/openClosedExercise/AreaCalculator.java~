package softwareEngineeringExercise;

public class AreaCalculator {
    public static double calculateArea(Object[] shapes) {
        double area = 0.0;
        
        for (Object shape : shapes) {
            if (shape instanceof Circle) {
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
