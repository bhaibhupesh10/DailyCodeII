package DatatTypes;
import java.util.Scanner;

public class Demo{
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("enter father's name");
        String k= scan.next();
        System.out.println("entered father name is : " + k);
        scan.nextLine();
        System.out.println("enter any number: ");
        int a = scan.nextInt();
        System.out.println("entered number is: " +a );
        float b = scan.nextFloat();
        System.out.println("entered number of b is: " +b);
        boolean c = scan.nextBoolean();
        System.out.println("entered number of c is: " +c);
        int d = scan.nextInt();
        System.out.println("enterd number of d is: " +d);
    }
}