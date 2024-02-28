package RevisionFoPlacement;

import org.w3c.dom.ls.LSOutput;

import java.util.Scanner;

public class calSum {
    public static int CalculateSum(int num1, int num2){
        int sum = num1 + num2;
        return sum;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("enter number a ");
        int a = scan.nextInt();
        System.out.println("Enter number b ");
        int b = scan.nextInt();
        int sum = CalculateSum(a, b);
        System.out.println("sum is "+ sum);
    }

}