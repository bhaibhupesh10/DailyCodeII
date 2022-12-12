package Patterns;

import java.util.Scanner;

public class LargestAmongTwoNumbers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int Largest;

        System.out.println("Enter num1: ");
        int num1 = scan.nextInt();
        System.out.println("Enter num2: ");
        int num2 = scan.nextInt();

        if(num1>num2){
            Largest = num1;
        }
        else
        Largest = num2;
        System.out.println("Largest: " + Largest);
    }
}
