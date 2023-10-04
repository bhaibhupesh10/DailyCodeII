package Patterns;

import java.util.Scanner;

public class CheckPositiveOrNegativeExample1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter a number: ");
        int num = scan.nextInt();
        //int number to be check


        //check the number is greater than 0 or not

        if(num>0){
            System.out.println("The number is positive: " +num);
        }
        else if(num<0)
        {
            System.out.println("The number is negative: " +num);
        }
        else{
            System.out.println("The number is zero");
        }
    }
}
