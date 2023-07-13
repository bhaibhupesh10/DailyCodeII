import java.util.Scanner;
public class whileLoopPractice {
    public static void main(String[] args) {
        Scanner Scan = new Scanner(System.in);
        System.out.println("enter a number between 1 to 10");
        int n = Scan.nextInt();
        while (n<1 || n>10 || n==2){
            System.out.println("n is not between 1 to 10");
            n = Scan.nextInt();
            }
        System.out.println("n is between 1 to 10");
        }
    }
