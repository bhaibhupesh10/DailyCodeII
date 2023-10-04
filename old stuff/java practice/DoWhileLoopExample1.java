import java.util.Scanner;
public class DoWhileLoopExample1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n;
        do{
            System.out.println("enter a number between 1 and 10");
            n = scan.nextInt();
        }
        while(n<1||n>10);
        System.out.println(n + " is between 1 and 10");
    }

}
