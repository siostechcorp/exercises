package openClosedExercise;

public class Main {

    public static void main(String[] args) {
        Circle circle = new Circle(25);
        Rectangle rectangle = new Rectangle(10, 20);
        Rectangle square = new Rectangle(10, 10);
        
        Object[] shapes = { circle, rectangle, square };
        
        double totalArea = AreaCalculator.calculateArea(shapes);
        
        System.out.println("The total area is " + totalArea + ".");
    }

}
