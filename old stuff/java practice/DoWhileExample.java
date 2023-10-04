import java.util.Scanner;
public class DoWhileExample {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("enter a number between 1 and 10");
        int i = scan.nextInt();
        while(i<=1 || i>10){
            System.out.println("enter a number between 1 and 10" );
            i = scan.nextInt();
        }
        System.out.println("true");
    }
}
